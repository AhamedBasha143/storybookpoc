import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
    dateOfBirth: '',
    gender: '',
    hobbies: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (formData.hobbies.length === 0) newErrors.hobbies = 'At least one hobby is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
      setFormData({
        username: '',
        password: '',
        age: '',
        dateOfBirth: '',
        gender: '',
        hobbies: [],
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className={`user-form`} onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          class="selectWidth"
        >
          <option value="">Select age</option>
          {[...Array(100).keys()].map((age) => (
            <option key={age} value={age + 1}>
              {age + 1}
            </option>
          ))}
        </select>
        {errors.age && <span className="error">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
      </div>

      <div className="form-group">
        <label>Gender</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
              required
            />
            Other
          </label>
        </div>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <div className="form-group">
        <label>Hobbies</label>
        <div>
          {['Reading', 'Traveling', 'Cooking', 'Sports'].map((hobby) => (
            <label key={hobby}>
              <input
                type="checkbox"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              {hobby}
            </label>
          ))}
        </div>
        {errors.hobbies && <span className="error">{errors.hobbies}</span>}
      </div>

      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
