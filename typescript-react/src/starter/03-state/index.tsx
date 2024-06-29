import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string
}

const navLinks: Link[] = [
  {
    id: 1,
    url: 'some url',
    text: 'some text'
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text'
  },
  {
    id: 3,
    url: 'some url',
    text: 'some text'
  }
]

function Component() {
  const [text, setText] = useState('shakeAndBake')
  const [number, setNumber] = useState(0)
  const [list, setList] = useState<number[]>([]) //situations where we need to explicitly provide type
  const [links, setLinks] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className='btn btn-center'
      onClick={()=>{
        setLinks([...links, {id:4, url:'hello', text:'sth'}])
      }}
      >click me</button>
      <h3>{number}</h3>
    </div>
  );
}
export default Component;
