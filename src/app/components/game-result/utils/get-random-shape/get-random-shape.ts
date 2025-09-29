import { shapes, type Shape } from "../../../../types";

const getRandomShape = (): Shape => {
    return shapes[Math.floor(Math.random() * shapes.length)];
}

export default getRandomShape;