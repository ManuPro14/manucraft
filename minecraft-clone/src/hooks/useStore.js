import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create (set  => ({
    texture: 'dirt',
    cubes: [{
        id: nanoid(),
        pos: [1, 1, 1], //x, y, z
        texture: 'dirt'
    },{
        id: nanoid(),
        pos: [1, 1, 2],
        texture: 'wood'
    },{
        id: nanoid(),
        pos: [1, 1, 3],
        texture: 'glass'
    },{
        id: nanoid(),
        pos: [1, 1, 4],
        texture: 'grass'
    }],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes,{
                id:nanoid(),
                texture: state.texture,
                pos: [x,y,z]
            }]
        }))
    },
    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id)
        }))
    },
    setTexture: (texture) => {
        set(() => ({ texture }))
    },
    saveWorld: () => {},
    resetWorld: () => {}

}))


    
    
