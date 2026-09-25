const STAGGER_STEP = 80

function useStagger(index) {
  return index * STAGGER_STEP
}

export default useStagger