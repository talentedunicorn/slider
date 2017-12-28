import { mutations } from '@/store/index';


describe('Mutations', () => {
  let state

  beforeEach(() => {
    state = { 
      current: 1, 
      slides: [
        { title: 'Title', content: '<p>Hello</p>'},
        { title: '', content: '<p>World</p>'},
        { title: 'Another one', content: '<p>DJ Khaleeed</p>'},
      ]
    }
  })

  it('should change current on selectSlide', () => {
    mutations.selectSlide(state, 2)
    expect(state.current).toBe(2)
  })

  it('should change current on prev', () => {
    mutations.selectSlide(state, 2)
    mutations.prev(state)
    expect(state.current).toBe(1)
  })

  it('should set current to last on prev when on first item', () => {
    mutations.prev(state)
    expect(state.current).toBe(state.slides.length)
  })

  it('should change current on next', () => {
    mutations.next(state)
    expect(state.current).toBe(2)
  })

  it('should change state current on next', () => {
    mutations.selectSlide(state, state.slides.length)
    mutations.next(state)
    expect(state.current).toBe(1)
  })
});
