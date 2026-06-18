<template>
  <button class="cart" type="button" aria-label="Shopping cart">
    <svg width="17" height="17">
      <use href="#cart"></use>
    </svg>
    <span class="cart__counter">2</span>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 41px;
  border: 2px solid var(--neutral-100);
  background: var(--neutral-100);
  cursor: pointer;
  transition:
    fill var(--trs-35),
    border var(--trs-35),
    background-color var(--trs-35),
    box-shadow var(--trs-35);
  fill: var(--primary-color);

  &__counter {
    position: absolute;
    top: 1.7rem;
    right: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 2px solid var(--primary-color);
    background-color: var(--accent-color);
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    fill: var(--neutral-100);
    border: 2px solid var(--accent-color);
    background-color: transparent;
  }

  &:active {
    fill: var(--neutral-100);
    border: 2px solid var(--accent-color);
    background-color: transparent;
  }

  &.focus-visible {
    box-shadow: 0 0 0 3px var(--focus-visible);
  }
}
</style>
