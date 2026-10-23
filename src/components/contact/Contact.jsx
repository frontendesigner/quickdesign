import React, {useState} from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "495154a6-4c63-4f19-9f2d-6fc65f3d45b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      form.reset();
    }
  };
  return (
    <form action="" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='name' className="form-control" placeholder='Full Name' required />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="tel" name='mobile' className="form-control" placeholder='Phone No.' required />
                </div>
                <div className="col-md-12">
                  <input type="mail" name='email' className="form-control" placeholder='Email' required />
                </div>
                <div className="col-lg-12 col-md-12">
                  <textarea name="enquiry" id="" placeholder='Your Message' required></textarea>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className='submit-btn'><button type="submit">send message</button></div>
                  <p style={{color: '#62c557', marginTop:'10px', fontWeight:'700', position:'absolute'}}>{result}</p>
                </div>
              </div>
            </form>
  )
}

export default Contact
