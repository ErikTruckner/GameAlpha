import { Canvas } from '@react-three/fiber';

export const Experience1 = () => {
  return (
    <>
      <div className='absolute z-10'>
        <h1>Spicy </h1>
      </div>
      <Canvas>
        <color attach='background' args={['lightblue']} />
      </Canvas>
    </>
  );
};
