<template>
  <div
    class="card "
    :class="`card--default  card--${layout} card--${cardStyles}`"
  >
    <div
      v-if="cardHasHeading || cardHasSubHeading || cardHasAddons"
      class="card__container card__divider"
      :class="[
        {'card__container--reverse' : reverseHeading},
        alignHeading,
        cardHasBody && dividerStyles ? dividerStyles :  `card__divider--${layout}`
      ]"
    >
      <div class="card__wrapper">
        <div
          v-if="cardHasHeading || cardHasSubHeading "
          class="card__inside-wrapper"
        >
          <slot name="heading" />
          <div
            v-if="cardHasSubHeading"
            class="card_column"
          >
            <slot name="subHeading" />
          </div>
        </div>
      </div>
      <slot name="addons" />
    </div>
    <div
      v-if="cardHasBody"
      class="card__container card__divider"
      :class="[ cardHasFooter && dividerStyles ? dividerStyles :  `card__divider--${layout}`]"
    >
      <slot name="body" />
    </div>
    <div
      v-if="cardHasFooter"
      class="card__container "
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { CARDDIRECTION, FLEXJUSTIFY, CARDSTYLES } from '@/helpers';
import { defineComponent, computed } from 'vue';
import './style.css';

export default defineComponent({
  name: 'AppCard',
  props: {
    layout: {
      type: String,
      default: CARDDIRECTION.COLUMN,
    },
    dividerStyles: {
      type: String,
    },
    cardStyles: {
      default: CARDSTYLES.PRIMARY,
    },
    reverseHeading: {
      type: Boolean,
    },
    alignHeading: {
      type: String,
      default: FLEXJUSTIFY.BETWEEN,
    },
  },

  setup(props, { slots }) {
    const cardHasHeading = computed(() => !!slots.heading);
    const cardHasSubHeading = computed(() => !!slots.subHeading);
    const cardHasAddons = computed(() => !!slots.addons);
    const cardHasBody = computed(() => !!slots.body);
    const cardHasFooter = computed(() => !!slots.footer);

    return {
      cardHasHeading,
      cardHasSubHeading,
      cardHasAddons,
      cardHasBody,
      cardHasFooter,
    };
  },
});
</script>
