import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './InvestorStartup.css';
import { Link } from "react-router-dom";

function Investor(){
    return(
        <div className="container-fluid background">
            <div className="row header">
                <h1>REGISTER HERE</h1>
            </div>
            <div className="row">
            <main className="form-main">
        <div>
            <h2 className="heading">
                Step 1 of 3: Accreditation
            </h2>
            <b>You must be an accredited investor to invest on Startup Hub</b><br></br>
        </div>
        <div class="form_container">
            <form action="" method="post">
                <p>Will you be investing money as indiviual, a trust, or a firm or fund</p>
                <input type="radio" id="" name="" value="Individual"></input>
                <label for="Individual">Individual</label><br></br>
                <input type="radio" id="" name="" value="Trust"></input>
                <label for="Trust">CSS</label><br></br>
                <input type="radio" id="" name="" value="Firm or Fund"></input>
                <label for="FirmOrFund">Firm or Fund</label>

                <p>
                    What is your Legal Name?
                </p>
                <input type="text" name="" id=""></input>
                <p>Where is your legal place of residence?</p>
                <select name="" id="">
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                </select>
                <p>How are you accredited?</p>
                <input type="radio" id="" name="" value="5m"></input>
                <label for="5m">I have at least $5M in investments</label><br></br>
                <input type="radio" id="" name="" value="btw2and5"></input>
                <label for="btw2and5">I have between $2M and $5M in net assets</label><br></br>
                <input type="radio" id="" name="" value="btw1and2"></input>
                <label for="btw1and2">I have between $1M and $2.2M in net assets</label><br></br>
                <input type="radio" id="" name="" value="joint200kor300k"></input>
                <label for="joint200kor300k">I have income of $200k (or $300k jointly with spouse) for the past 2 years and expect the same this year</label><br></br>
                <input type="radio" id="" name="" value="notAccred"></input>
                <label for="notAccred">I'm not accredited yet</label>
                
            </form>
        </div>
        <div>
            <h2 className="heading">
                Step 2 of 3: Investment Goals
            </h2>
            <b>Tell us more about why you want to invest on Startup Hub</b><br></br>
        </div>
        <div class="form_container">
            <form action="" method="post">
                <p>Which of the following investment strategies (or products) best match your preferences?</p>
                <b>Choose all that apply</b><br></br>
                <input type="checkbox" id="strat1" name="" value="pickCompanies"></input>
                <label for="strat1">Picking companies to invest in</label><br></br>
                <input type="checkbox" id="strat2" name="" value="InvestingInFundsThatBroadlyIndexVenture"></input>
                <label for="strat2">Investing in funds that broadly index venture</label><br></br>
                <input type="checkbox" id="strat3" name="" value="investingBehindFundManagers"></input>
                <label for="strat3"> Investing behind Fund Managers who pick companies to invest in</label>

                <p>
                    How much are you hoping to allocate (in USD) to startups using Startup Hub over the next 12 months?
                </p>
                <input type="radio" id="" name="" value="20k"></input>
                <label for="20k">Up to $20,000</label><br></br>
                <input type="radio" id="" name="" value="50k"></input>
                <label for="50k">Up to $50,000</label><br></br>
                <input type="radio" id="" name="" value="100k"></input>
                <label for="100k">Up to $100,000</label><br></br>
                <input type="radio" id="" name="" value="250k"></input>
                <label for="250k">Up to $250,000</label><br></br>
                <input type="radio" id="" name="" value="500k"></input>
                <label for="500k">Up to $500,000</label><br></br>
                <input type="radio" id="" name="" value="gre500k"></input>
                <label for="gre500k">More than $500,000</label>
                <p>What percentage of your net worth do you want to allocate to investing in startups?</p>
                <input type="radio" id="" name="" value="5"></input>
                <label for="5">Up to 5%</label><br></br>
                <input type="radio" id="" name="" value="10"></input>
                <label for="10">Up to 10%</label><br></br>
                <input type="radio" id="" name="" value="15"></input>
                <label for="15">Up to 15%</label><br></br>
                <input type="radio" id="" name="" value="gre15"></input>
                <label for="gre15">Up to More than 15%</label><br></br>
                <p>What are your main reasons for choosing Startup Hub Venture?</p>
                <p>Choose all that apply</p>
                <input type="radio" id="" name="" value="1"></input>
                <label for="1">Generating financial returns for your portfolio</label><br></br>
                <input type="radio" id="" name="" value="2"></input>
                <label for="2">Meeting new people to expand your network</label><br></br>
                <input type="radio" id="" name="" value="3"></input>
                <label for="3">Accessing dealflow you can’t get anywhere else</label><br></br>
                <input type="radio" id="" name="" value="4"></input>
                <label for="4">Learning more about tech and startups</label><br></br>
                <p>How are you hoping to use Startup Hub Venture?</p>
                <input type="text" name="" id=""></input>
            </form>
        </div>
        <div>
            <h2  className="heading">
                Step 3 of 3: Past Experience
            </h2>
            <b>Your goals and past experience can help unlock access to investment opportunities</b><br></br>
        </div>
        <div class="form_container">
            <form action="" method="post">
                <p>LinkedIn Profile</p>
                <b>Providing a LinkedIn profile helps us determine your eligibility. If you don’t have one, leave this field blank.</b><br></br>
                <input type="text" name="" id=""></input>

                <p>
                    What is your experience investing in venture-backed tech startups or venture capital funds?
                </p>
                <input type="checkbox" id="" name="" value="startupDirectly"></input>
                <label for="startupDirectly">I invested in a startup directly</label><br></br>
                <input type="checkbox" id="" name="" value="startupIndirectly"></input>
                <label for="startupIndirectly">I invested in startups indirectly</label><br></br>
                <input type="checkbox" id="" name="" value="workedAtInvestmentFirm"></input>
                <label for="workedAtInvestmentFirm">I work or worked at a investment firm</label><br></br>
                <input type="checkbox" id="" name="" value="noneofthese"></input>
                <label for="noneofthese">None of the above</label><br></br>
                <p>What is your experience working with tech startups?</p>
                <input type="checkbox" id="" name="" value="1"></input>
                <label for="1">I work or worked at a tech startup</label><br></br>
                <input type="checkbox" id="" name="" value="2"></input>
                <label for="2">I advise or advised a tech startup</label><br></br>
                <input type="checkbox" id="" name="" value="3"></input>
                <label for="3">I am or was a tech startup founder</label><br></br>
                <input type="checkbox" id="" name="" value="noneofthese"></input>
                <label for="noneofthese">None of the above</label><br></br>
                <p>How did you hear about AngelList Venture?</p>
                <p>Choose all that apply</p>
                <input type="checkbox" id="" name="" value="1"></input>
                <label for="1">Google search</label><br></br>
                <input type="checkbox" id="" name="" value="2"></input>
                <label for="2">Newsletter/Media Site</label><br></br>
                <input type="checkbox" id="" name="" value="3"></input>
                <label for="3">Friend or Connection</label><br></br>
                <input type="checkbox" id="" name="" value="4"></input>
                <label for="4">Other (please specify)</label><br></br>
                <input type="text" name="" id=""></input>
                <b><strong>Please carefully review the information below before submitting your application:</strong></b><br></br>
                <ol>
                    <li>
                        I understand that most investments in startups result in a complete loss.
                    </li>
                    <li>
                        I understand that Startup Hub does not verify information on the site, and I am responsible for my own diligence.
                    </li>
                    <li>
                        I promise to hold Startup Hub harmless against any damage that may happen to myself as a result of my use of AngelList.
                    </li>
                    <li>
                        If I invest, I will comply with securities laws and consult my own attorney and professional advisors where I need advice.
                    </li>
                    <li>
                        I understand that I will be permanently banned from Startup Hub and that I may face legal consequences if I falsely represent my accreditation status.
                    </li>
                </ol>
                <input type="checkbox" name="TC" id=""></input>
                <label for="TC">I agree to the terms and conditions, as well as the terms above.</label><br></br>
                <Link className="submit-btn" to="/signup">Submit</Link>
            </form>
        </div>
    </main>
            </div>
        </div>
    )
}

export default Investor;