import { atom } from 'recoil'

export const tasksAtom = atom({
  key: 'tasksAtom',
  default: []
})

export const filterAtom = atom({
  key: 'filterAtom',
  default: 'all'
})
