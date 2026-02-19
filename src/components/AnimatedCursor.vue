<template>
  <div
    v-if="enabled"
    class="cursor-layer"
    :class="{
      'is-visible': visible,
      'is-hover': hovering,
      'is-pressed': pressed
    }"
  >
    <div ref="auraRef" class="cursor-aura"></div>
    <div ref="ringRef" class="cursor-ring">
      <div class="cursor-ring-spin"></div>
      <div class="cursor-ring-spin-alt"></div>
      <div class="cursor-ring-grid"></div>
      <div class="cursor-ring-orbit">
        <span class="orbit-dot od-1"></span>
        <span class="orbit-dot od-2"></span>
        <span class="orbit-dot od-3"></span>
      </div>
    </div>
    <div ref="dotRef" class="cursor-dot">
      <span class="cursor-dot-pulse"></span>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const enabled = ref(false);
const visible = ref(false);
const hovering = ref(false);
const pressed = ref(false);

const ringRef = ref(null);
const dotRef = ref(null);
const auraRef = ref(null);

let rafId = null;
let mx = 0;
let my = 0;
let tx = 0;
let ty = 0;
let ax = 0;
let ay = 0;
let hoverTargetEl = null;

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, .cursor-hover";

function isInteractive(target) {
  return !!target?.closest?.(INTERACTIVE_SELECTOR);
}

function onMouseMove(e) {
  tx = e.clientX;
  ty = e.clientY;

  if (!visible.value) visible.value = true;
  if (dotRef.value) {
    dotRef.value.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
  }
}

function onMouseEnter() {
  visible.value = true;
}

function onMouseLeave() {
  visible.value = false;
  hovering.value = false;
  pressed.value = false;
}

function onMouseDown() {
  pressed.value = true;
}

function onMouseUp() {
  pressed.value = false;
}

function onMouseOver(e) {
  const interactiveEl = e.target?.closest?.(INTERACTIVE_SELECTOR) || null;
  hovering.value = !!interactiveEl;
  hoverTargetEl = interactiveEl;
}

function onMouseOut(e) {
  const fromInteractive = isInteractive(e.target);
  const toInteractive = isInteractive(e.relatedTarget);
  if (fromInteractive && !toInteractive) {
    hovering.value = false;
    hoverTargetEl = null;
  }
}

function animate() {
  let followX = tx;
  let followY = ty;

  // Magnetic pull: gently attract the cursor ring to nearby interactive elements.
  if (hovering.value && hoverTargetEl) {
    const rect = hoverTargetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    followX = tx * 0.68 + cx * 0.32;
    followY = ty * 0.68 + cy * 0.32;
  }

  mx += (followX - mx) * 0.16;
  my += (followY - my) * 0.16;
  ax += (followX - ax) * 0.09;
  ay += (followY - ay) * 0.09;

  if (ringRef.value) {
    ringRef.value.style.transform = `translate3d(${mx - 16}px, ${my - 16}px, 0)`;
  }
  if (auraRef.value) {
    auraRef.value.style.transform = `translate3d(${ax - 30}px, ${ay - 30}px, 0)`;
  }

  rafId = requestAnimationFrame(animate);
}

onMounted(() => {
  const supportsDesktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  enabled.value = supportsDesktopPointer && !reduceMotion;

  if (!enabled.value) return;

  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("mouseenter", onMouseEnter, { passive: true });
  window.addEventListener("mouseleave", onMouseLeave, { passive: true });
  window.addEventListener("mousedown", onMouseDown, { passive: true });
  window.addEventListener("mouseup", onMouseUp, { passive: true });
  window.addEventListener("mouseover", onMouseOver, { passive: true });
  window.addEventListener("mouseout", onMouseOut, { passive: true });
  window.addEventListener("blur", onMouseLeave, { passive: true });

  rafId = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  if (!enabled.value) return;

  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseenter", onMouseEnter);
  window.removeEventListener("mouseleave", onMouseLeave);
  window.removeEventListener("mousedown", onMouseDown);
  window.removeEventListener("mouseup", onMouseUp);
  window.removeEventListener("mouseover", onMouseOver);
  window.removeEventListener("mouseout", onMouseOut);
  window.removeEventListener("blur", onMouseLeave);

  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
.cursor-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.22s ease;
}

.cursor-layer.is-visible {
  opacity: 1;
}

.cursor-ring,
.cursor-dot,
.cursor-aura {
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
  pointer-events: none;
}

.cursor-aura {
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(13, 89, 242, 0.22) 0%, rgba(13, 89, 242, 0.03) 48%, rgba(13, 89, 242, 0) 72%);
  filter: blur(1px);
  mix-blend-mode: screen;
  transition: width 220ms ease, height 220ms ease, opacity 220ms ease, background 220ms ease;
}

.cursor-ring {
  width: 32px;
  height: 32px;
  border: 1.2px solid rgba(125, 182, 255, 0.9);
  border-radius: 999px;
  overflow: visible;
  background:
    radial-gradient(circle, rgba(13, 89, 242, 0.14) 0%, rgba(13, 89, 242, 0) 68%),
    conic-gradient(from 200deg, rgba(13, 89, 242, 0.75), rgba(14, 165, 233, 0.8), rgba(13, 89, 242, 0.75));
  box-shadow: 0 0 24px rgba(13, 89, 242, 0.28), inset 0 0 12px rgba(255, 255, 255, 0.08);
  transition: width 180ms ease, height 180ms ease, border-color 180ms ease, background 180ms ease;
}

.cursor-ring-spin,
.cursor-ring-spin-alt,
.cursor-ring-grid {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.cursor-ring-spin {
  inset: -3px;
  border: 1px dashed rgba(125, 182, 255, 0.55);
  border-top-color: rgba(14, 165, 233, 0.95);
  border-right-color: rgba(13, 89, 242, 0.95);
  animation: hudSpin 3.4s linear infinite;
}

.cursor-ring-spin-alt {
  inset: -7px;
  border: 1px solid rgba(125, 182, 255, 0.18);
  border-left-color: rgba(14, 165, 233, 0.55);
  border-bottom-color: rgba(13, 89, 242, 0.48);
  animation: hudSpinReverse 4.8s linear infinite;
}

.cursor-ring-grid {
  inset: 6px;
  border: 1px solid rgba(125, 182, 255, 0.25);
  box-shadow: inset 0 0 10px rgba(13, 89, 242, 0.3);
  animation: hudScan 2.1s ease-in-out infinite;
}

.cursor-ring-orbit {
  position: absolute;
  inset: -10px;
  border-radius: 999px;
  animation: hudSpin 6.2s linear infinite;
}

.orbit-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.95);
  box-shadow: 0 0 8px rgba(125, 211, 252, 0.8);
}

.od-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.od-2 {
  bottom: 9%;
  left: 13%;
}

.od-3 {
  right: 8%;
  top: 28%;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #7fc3ff;
  box-shadow: 0 0 18px rgba(14, 165, 233, 0.8), 0 0 4px rgba(255, 255, 255, 0.6);
  transition: transform 80ms linear, background 180ms ease;
  display: grid;
  place-items: center;
}

.cursor-dot-pulse {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  border: 1px solid rgba(125, 182, 255, 0.55);
  opacity: 0.9;
  animation: dotPulse 1.35s ease-out infinite;
}

.cursor-layer.is-hover .cursor-aura {
  width: 84px;
  height: 84px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, rgba(14, 165, 233, 0.05) 48%, rgba(14, 165, 233, 0) 74%);
}

.cursor-layer.is-hover .cursor-ring {
  width: 46px;
  height: 46px;
  border-color: rgba(14, 165, 233, 0.95);
  background:
    radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(14, 165, 233, 0) 68%),
    conic-gradient(from 240deg, rgba(14, 165, 233, 0.9), rgba(59, 130, 246, 0.9), rgba(14, 165, 233, 0.9));
}

.cursor-layer.is-hover .cursor-ring-spin {
  animation-duration: 1.6s;
  border-top-color: rgba(125, 211, 252, 1);
}

.cursor-layer.is-hover .cursor-ring-spin-alt {
  animation-duration: 2.3s;
  border-left-color: rgba(125, 211, 252, 0.95);
}

.cursor-layer.is-hover .cursor-ring-orbit {
  animation-duration: 3.6s;
}

.cursor-layer.is-hover .cursor-dot {
  background: #0ea5e9;
}

.cursor-layer.is-pressed .cursor-aura {
  width: 46px;
  height: 46px;
}

.cursor-layer.is-pressed .cursor-ring {
  width: 24px;
  height: 24px;
}

.cursor-layer.is-pressed .cursor-ring-spin {
  animation-duration: 0.9s;
}

.cursor-layer.is-pressed .cursor-ring-spin-alt {
  animation-duration: 1.2s;
}

@keyframes hudSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes hudSpinReverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes hudScan {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.95;
  }
}

@keyframes dotPulse {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}
</style>
