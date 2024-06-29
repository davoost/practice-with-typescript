
import { type PropsWithChildren } from 'react'

// type ComponentProps = {
//   title:string, id:number, children?: React.ReactNode
// }

type ComponentProps = PropsWithChildren<{
  title:string, id:number, children?: React.ReactNode
}> // allows children in app to be accepted by typescript

function Component({title, id, children}:ComponentProps) {
  return (
    <div>
      <h2>Name: {title}</h2>
      <h2>ID : {id}</h2>
    </div>
  );
}
export default Component;
