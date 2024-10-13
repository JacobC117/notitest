

function ProgBar() {
  return (
    <div style={{fontSize:"3.2vh", stroke:"white", paddingBottom:'0.5vh'}}>
        <p style={{background:'#FECACA',display: 'flex', justifyContent: 'center', alignItems:'center' }}>London <progress style={{width:"50%", height:'9.5vh'}} value={null} /> W.Sydney</p>

    <p style={{background:'#BBF7D0', display: 'flex', justifyContent: 'center', alignItems:'center' }}>Newark<progress style={{width:"50%", height:'9.5vh'}} value={null} /> W.Sydney</p>


    <p style={{background:'#E9D5FF', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Perth <progress style={{width:"50%", height:'9.5vh'}} value={null} />  W.Sydney</p>

    <p style={{background:'#FED7AA', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Boston <progress style={{width:"50%", height:'9.5vh'}} value={null} /> W.Sydney</p>
    <p style={{background:'#FECACA', display: 'flex', justifyContent: 'center', alignItems:'center'}}> Dallas <progress style={{width:"50%", height:'9.5vh'}} value={null} />  W.Sydney</p>

    <p style={{background:'#BBF7D0', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Chicago <progress style={{width:"50%", height:'9.5vh'}} value={null} /> W.Sydney</p>




    <p style={{background:'#E9D5FF',display: 'flex', justifyContent: 'center', alignItems:'center' }}> Memphis <progress style={{width:"50%", height:'9.5vh'}} value={null} /> W.Sydney</p>


    </div>
  );
}

export default ProgBar;