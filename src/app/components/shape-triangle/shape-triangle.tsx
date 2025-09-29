import './shape-triangle.css';
import Rock from '../../../assets/images/icon-rock.svg';
import Paper from '../../../assets/images/icon-paper.svg';
import Scissors from '../../../assets/images/icon-scissors.svg';
import type { ShapeTriangleProps } from './types';

const ShapeTriangle = (props: ShapeTriangleProps) => {
    const { onShapeClick } = { ...props }

    return (
        <div className='shapes'>
            <div className='shapes__background' />
            <button
                type='button'
                title='Paper'
                className='shape__button shape__container shape__container--blue shape__container--top-left'
                onClick={() => onShapeClick('paper')}
            >
            <div className='shape__background'>
                <img 
                    src={Paper}
                    alt='paper'
                    className='shape__logo'
                />
            </div>
            </button>
            <button
                type='button'
                title='Scissors'
                className='shape__button shape__container shape__container--gold shape__container--top-right'
                onClick={() => onShapeClick('scissors')}
            >
            <div className='shape__background'>
                <img 
                    src={Scissors}
                    alt='scissors'
                    className='shape__logo'
                />
            </div>
            </button>
            <button
                type='button'
                title='Rock'
                className='shape__button shape__container shape__container--red shape__container--bottom-middle'
                onClick={() => onShapeClick('rock')}
            >
            <div className='shape__background'>
                <img 
                    src={Rock}
                    alt='rock'
                    className='shape__logo'
                />
            </div>
            </button>
        </div>
    )
}

export default ShapeTriangle;