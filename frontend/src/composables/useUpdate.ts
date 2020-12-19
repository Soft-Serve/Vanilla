import { computed, WritableComputedRef } from 'vue';

type Emit = (event: string, ...args: any[]) => void;

const useUpdate = (props: Record<string, any>, emit: Emit, name = 'value'): WritableComputedRef<any> => computed({
  get: () => props[name],
  set: (value: any) => emit(`update${name}`, value),
});

export default useUpdate;
