import { grassImg, dirtImg, glassImg, woodImg } from "./images.js";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg)
const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter


export { 
  groundTexture,
  grassTexture, 
  dirtTexture,
  glassTexture,
  woodTexture
}