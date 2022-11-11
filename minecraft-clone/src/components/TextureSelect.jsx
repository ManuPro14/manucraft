import { useEffect } from 'react'
import { useState } from 'react'
import { useKeyboard } from '../hooks/useKeyboard.js'
import { useStore } from '../hooks/useStore.js'
import * as images from '../image/images.js'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [texture , setTexture] = useStore(state =>
        [state.texture, state.setTexture])

    const {
        dirt ,
        grass ,
        glass ,
        wood 
    } = useKeyboard()

    

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood 
        }

        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnable]) => isEnable)

        if(selectedTexture){
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

    }, [dirt,grass,glass,wood ])

    if(!visible) return null
    

    return (
        <div className='texture-selector'>
          {
            Object
              .entries(images)
              .map(([imgKey,img]) => {
                    
                return(
                  <img 
                    className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                    key={imgKey}
                    src={img}
                    alt={imgKey}
                  />
                )
              })
          }
        </div>
    )

}