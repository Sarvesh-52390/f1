import React, { useState } from 'react';
import '../Profile/Profile.css';

export const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="Uploaded" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

export const Name = ({ onChange, value }) => (
  <div className='bodyp'>
  <div className="field">
    <label htmlFor="name">name:</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Alexa"
      required
    />
  </div>
  </div>
);

export const Status = ({ onChange, value }) => (
  <div className='bodyp'>
  <div className="field">
    <label htmlFor="status">status:</label>
    <input
      id="status"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="It's a nice day!"
      required
    />
  </div>
  </div>
);

export const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile</h1>
      {children}
      <button type="submit" className="save">Save</button>
    </form>
  </div>
);

export const Profile = ({ onSubmit, src, name, status }) => (
  <div className='bodyp'>
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img src={src} alt="Uploaded" />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="buttonp"  >Edit Profile</button>
    </form>
  </div>
  </div>
);

export const ProfileForm = () => {
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [active, setActive] = useState('edit');

  const photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const editName = e => {
    setName(e.target.value);
  };

  const editStatus = e => {
    setStatus(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setActive(active === 'edit' ? 'profile' : 'edit');
  };

  return (
    <div>
      {active === 'edit' ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
          <Name onChange={editName} value={name} />
          <Status onChange={editStatus} value={status} />
        </Edit>
      ) : (
        <Profile onSubmit={handleSubmit} src={imagePreviewUrl} name={name} status={status} />
      )}
    </div>
  );
};
