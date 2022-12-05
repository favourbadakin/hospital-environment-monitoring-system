import { MdAddAlert } from "react-icons/md";
export default function Card(props){
    return(

        <section>
       <div className="cd-bg">
      
          <div className="icon-para">
      <i className="props-icon">{props.icon}</i>
      <h2 className="parameter"><span>{props.parameter}</span></h2>
      </div>
      <div className='val-box'>
          <span className='value'>{props.value}{props.unit}</span>
         
          {props.value === true && <div className="smoke-alert"><span className='smoke-value'><i className='red-alert'><MdAddAlert/></i> Smoke Detected</span></div>}
      {props.value === false && <div className="smoke"><span className='smoke-value'>No Smoke Detected</span></div>}
      </div>
     
      
      </div>
  
        </section>
    )
}
