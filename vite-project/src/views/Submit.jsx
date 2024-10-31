import { useState } from 'react';
import './Submit.css';

const Submit = () => {
    const [language, setLanguage] = useState('');
    const [solution, setSolution] = useState('');
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        if (uploadedFile) {
            const reader = new FileReader();
            reader.onload = (e) => setSolution(e.target.result);
            reader.readAsText(uploadedFile);
        }
    };

    return (
        <div className="submit-modal">
            <h2>Submit</h2>
            <div className="submit-field">
                <label>Problem:</label>
                <span>SPOJ - GRAFFDEF</span>
            </div>
            <div className="submit-field">
                <label>Open:</label>
                <button className="toggle-button">Yes</button>
                <button className="toggle-button">No</button>
            </div>
            <div className="submit-field">
                <label>Submit by:</label>
                <button className="toggle-button">Bot</button>
                <button className="toggle-button">My Account</button>
            </div>
            <div className="submit-field">
                <label>Language:</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="dropdown">
                    <option value="">Select Language</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                    <option value="javascript">JavaScript</option>
                </select>
            </div>
            <div className="submit-field solution-field">
                <label>Solution:</label>
                <textarea
                    placeholder="At least 20 characters"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    rows="5"
                />
                <input type="file" accept=".txt" onChange={handleFileUpload} className="file-input" />
            </div>
            <div className="submit-buttons">
                <button className="cancel-button">Cancel</button>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default Submit;
