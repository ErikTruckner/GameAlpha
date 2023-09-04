import { Canvas } from '@react-three/fiber';

export const Experience1 = () => {
  return (
    <>
      <h1 className='absolute z-10'>Spicy </h1>
      <Canvas>
        <color attach='background' args={['lightblue']} />
      </Canvas>
    </>
  );
};
