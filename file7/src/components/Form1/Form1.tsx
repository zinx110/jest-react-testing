export const Form1 = () => {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="test" id="name" placeholder="Full Name" />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" id="bio" />
                </div>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="job-location2">Name</label>
                    <select id="job-location2">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the
                        terms and conditions.
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
};
