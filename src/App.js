import './App.css';
import img from './images/img.jpg';

function App() {
  return (
    <div className="App">
      <h1 className='title'>CV APPLICATION</h1>
     <div className='firstHalf'>
        <img src={img} alt="cv_pic" className='cv_pic'/>
        <h1 className='firstName'>Christiana</h1>
        <h1 className='surName'>Adisa</h1>
        <p className='role'>CREATIVE DESIGNER</p>

        <h2>CONTACT</h2>
        <p>Phone: +776-2323</p>
        <p>Email: sidehustle@gmail.com</p>
        <p>Location: NoWhere </p>

        <h2>SKILLS</h2>
        <ul>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Web Development</li>
          <li>Fashion Designing</li>
          <li>Scratch</li>
        </ul>
     </div>
     <div className='secondHalf'>
      <h2>Profile</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      <h2>Work Experience</h2>
      <p>2011-2014</p>
      <p className='job-role'>Graphic Designer</p>
      <p>Company Name</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
     <br></br>
      <p>2014-2016</p>
      <p className='job-role'>SR. Graphic Designer</p>
      <p>Company Name</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
     <br></br>
      <p>2016-Present</p>
      <p className='job-role'>Creative Director</p>
      <p>Company Name</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <br></br>
      <h2>Education</h2>
      <p>2004</p>
      <p className='job-role'>Diploma in Graphic Design</p>
      <p>University of Name, US</p>
      <br></br>
      <p>2008</p>
      <p className='job-role'>Bachelor of Fine Art</p>
      <p>University of Name, New York</p>
     </div>
    </div>
  );
}

export default App;
