// Props passed were destructued in the arguement itself, destuctured prop was also renamed

const EmptyMessage =({food:foodList})=>{
    let message= foodList.length===0 && <h1>Im actually Hungry</h1>

    return <>
    {message}
    </>
}

export default EmptyMessage
