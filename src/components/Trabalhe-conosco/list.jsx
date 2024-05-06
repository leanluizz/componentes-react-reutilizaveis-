export default function List ({
    img, title,colors, background,svg,
    optionOne, optionTwo,optionThree,optionFour,optionFive,optionSix,optionSeven
}){
    return (
        <div id='jobs' className='mt-5 bg-dark d-lg-flex align-items-center'>
        <div className='w-50'>
        <img className='d-none d-lg-block' src={img} alt="photo" />
        </div>
        <div className='d-lg-flex p-lg-0 p-3'>
            {svg}
        <div className='d-flex flex-column'>
        <h2 className=' p-5 text-center text-light'>{title}</h2>
        <select className='btn btn-dark text-start p-2 rounded-1 outline-0 border-0' name="jobs" id="job">
            <option style={{color:colors ,background: background}} className={`${!optionOne ? 'd-none' : null}`} value={`${optionOne}`}>{optionOne}</option>
            <option style={{color:colors ,background: background}} className={`${!optionTwo ? 'd-none' : null}`} value={`${optionTwo}`}>{optionTwo}</option>
            <option style={{color:colors ,background: background}} className={`${!optionThree ? 'd-none' : null}`} value={`${optionThree}`}>{optionThree}</option>
            <option style={{color:colors ,background: background}} className={`${!optionFour ? 'd-none' : null}`} value={`${optionFour}`}>{optionFour}</option>
            <option style={{color:colors ,background: background}} className={`${!optionFive ? 'd-none' : null}`} value={`${optionFive}`}>{optionFive}</option>
            <option style={{color:colors ,background: background}} className={`${!optionSix ? 'd-none' : null}`} value={`${optionSix}`}>{optionSix}</option>
            <option style={{color:colors ,background: background}} className={`${!optionSeven ? 'd-none' : null}`} value={`${optionSeven}`}>{optionSeven}</option>
        </select>
        </div>
        </div>
        </div>
    )
}