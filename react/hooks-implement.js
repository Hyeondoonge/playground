// 설계 & 수도코드 작성
// reference: https://github.com/walking-sunset/use-state-from-scratch/blob/master/src/hooks.js

const hooksApi = (() => {
  let hookIndex = 0;
  const hooks = [];

  function useState(initialValue) {
    const state = hooks[hookIndex] || initialValue;
    hooks[hookIndex] = state;

    const currentHookIndex = hookIndex;

    const setState = (value) => {
      hooks[currentHookIndex] = value;
      hookIndex = 0;
      render();
    };
    hookIndex++;

    return [state, setState];
  }

  function useEffect(effect, deps) {
    const prevDeps = hooks[hookIndex];

    const isFirstCall = () => prevDeps === undefined;
    const isDepsUpdated = () => deps.some((dep, index) => dep !== prevDeps[index]);
    const isDepsNotProvided = () => deps === undefined;

    if (isFirstCall() || isDepsNotProvided() || isDepsUpdated()) {
      effect();
    }
    hooks[hookIndex] = deps;
    hookIndex++;
  }

  return { useState, useEffect };
})();

export default hooksApi();
