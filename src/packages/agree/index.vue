<script lang="ts">
import { h, defineComponent } from 'vue'
import MdIcon from 'mand-mobile/icon'
import type { PropType } from 'vue'
import {
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
} from 'mand-mobile/utils'

export default defineComponent({
  name: 'MdAgree',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
      default: 'md',
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, { emit, slots }) {
    const onChange = (event: Event) => {
      if (props.disabled) return
      emit(UPDATE_MODEL_EVENT, !props.modelValue)
      emit(CHANGE_EVENT, event)
    }

    const content = () =>
      h(
        'div',
        {
          class: {
            'md-agree': true,
            disabled: props.disabled,
          },
        },
        [
          h(
            'div',
            {
              class: {
                'md-agree-icon': true,
                checked: props.modelValue,
              },
              onClick: (event: Event) => onChange(event),
            },
            h(MdIcon, {
              name: props.modelValue ? 'checked' : 'check',
              size: props.size,
            })
          ),
          h(
            'div',
            {
              class: 'md-agree-content',
            },
            slots.default?.() || []
          ),
        ]
      )

    return () => content()
  },
})
</script>

<style lang="stylus">
.md-agree
  display flex
  align-items center
  &.disabled
    opacity agree-disabled-opacity
  .md-agree-icon
    display flex
    justify-content center
    align-items center
    align-self flex-start
    flex-shrink 0
    position relative
    margin-right h-gap-sm
    color agree-fill
    width 50px
    height 50px
    .md-agree-icon-container
      position relative
      .md-icon
        display flex
        width auto
        height auto
        line-height 1
        will-change auto
        &.md-icon-checked
          position absolute
          top 0
          left 0
          transform scale(0.6)
          color transparent
          transition all .3s ease-in-out-quint
        &.md-icon-check
          color agree-fill
    &.checked .md-agree-icon-container
      .md-icon-checked
        transform scale(1)
        color agree-fill
      .md-icon-check
        opacity 0.8
.md-example-child-agree
  padding 20px 32px
  font-size .24rem
  background #fff
.md-agree-content
  flex 1 1 0%
  line-height 1.5
  color #858b9c
</style>
