import Button from '../button/button'



function Buttons() {
  const firstButtonIsClicked=()=>{
    console.log("first")
}


  const secondButtonIsClicked=()=>{
    console.log("second")
}
const thirdButtonIsClicked=()=>{
  console.log("third")
}

  return (
    <div className="sarah-button">
      <Button  type="submit" variant='first' onclick={firstButtonIsClicked}>first
       </Button>
      
      <Button type="submit"  variant='second'  onclick={secondButtonIsClicked}>second</Button>
      
      <Button type="submit"  variant='third' onclick={thirdButtonIsClicked}>third</Button>


    </div>
  )
}

export default Buttons
