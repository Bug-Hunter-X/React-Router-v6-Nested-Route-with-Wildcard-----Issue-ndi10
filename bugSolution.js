```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}>
          <Route path=":contactId*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactContainer() {
  return (
    <div>
      <h2>Contact</h2>
      <Routes>
          {/* Nested Routes handled here */}
          <Route index element={<h1>Select a contact</h1>}/>
      </Routes>
    </div>
  );
}

function Contact() {
  let { contactId } = useParams();
  return (
    <div>
      <h1>Contact Detail</h1>
      <p>Contact ID: {contactId}</p>
    </div>
  );
}
export default App; 
```