<template>
  <button
    :disabled="disabled"
    :type="type"
    class="button"
    v-on="$listeners"
  >
    <slot>
      <span
        class="button--default"
        :class="{'button--disabled' : disabled }"
      >
        {{ text || 'button' }}
      </span>
    </slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './style.css';

@Component({
  name: 'BaseButton',
  components: {

  },
})
export default class BaseButton extends Vue {
    @Prop({ required: false, default: 'button' })
    readonly type!: string;

    @Prop({ required: false })
    readonly disabled!: boolean;

    @Prop({ required: false, default: 'button' })
    readonly text!: string;
}
</script>
