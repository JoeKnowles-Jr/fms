import React from 'react';
import styled from 'styled-components';

export const DisplayFilter = ({ userState, setUserState}) => {
    
    const handleChange = (e) => {
        setUserState(e.target.value);
    };

    return (
        <DisplayFilterWrapper>
            <select onChange={handleChange} value={userState}>
                <option value="all">All States</option>
                <option value="mine">My State</option>
                <option value="AL"> AL - Alabama</option>
                <option value="AK"> AK - Alaska</option>
                <option value="AZ"> AZ - Arizona</option>
                <option value="AR"> AR - Arkansas</option>
                <option value="CA"> CA - California</option>
                <option value="CO"> CO - Colorado</option>
                <option value="CT"> CT - Connecticut</option>
                <option value="DE"> DE - Delaware</option>
                <option value="FL"> FL - FLorida</option>
                <option value="GA"> GA - Georgia</option>
                <option value="HI"> HI - Hawaii</option>
                <option value="ID"> ID - Idaho</option>
                <option value="IL"> IL - Illinois</option>
                <option value="IN"> IN - Indiana</option>
                <option value="IA"> IA - Iowa</option>
                <option value="KS"> KS - Kansas</option>
                <option value="KY"> KY - Kentucky</option>
                <option value="LA"> LA - Lousiana</option>
                <option value="ME"> ME - Maine</option>
                <option value="MD"> MD - Maryland</option>
                <option value="MA"> MA - Massachusetts</option>
                <option value="MI"> MI - Michigan</option>
                <option value="MN"> MN - Minnesota</option>
                <option value="MS"> MS - Mississippi</option>
                <option value="MO"> MO - Missouri</option>
                <option value="MT"> MT - Montana</option>
                <option value="NE"> NE - Nebraska</option>
                <option value="NV"> NV - Nevada</option>
                <option value="NH"> NH - New Hampshire</option>
                <option value="NJ"> NJ - New Jersey</option>
                <option value="NM"> NM - New Mexico</option>
                <option value="NY"> NY - New York</option>
                <option value="NC"> NC - North Carolina</option>
                <option value="ND"> ND - North Dakota</option>
                <option value="OH"> OH - Ohio</option>
                <option value="OK"> OK - Oklahoma</option>
                <option value="OR"> OR - Oregon</option>
                <option value="PA"> PA - Pennsylvania</option>
                <option value="RI"> RI - Rhode Island</option>
                <option value="SC"> SC - South Carolina</option>
                <option value="SD"> SD - South Dakota</option>
                <option value="TN"> TN - Tennessee</option>
                <option value="TX"> TX - Texas</option>
                <option value="UT"> UT - Utah</option>
                <option value="VT"> VT - Vermont</option>
                <option value="VA"> VA - Virginia</option>
                <option value="WA"> WA - Washington</option>
                <option value="WV"> WV - West Virginia</option>
                <option value="WI"> WI - Wisconsin</option>
                <option value="WY"> WY - Wyoming</option>
            </select>
        </DisplayFilterWrapper>
    );
};

const DisplayFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    .select {
        height: 30px;
        border: 1px solid #999;
        font-size: 1.2rem;
        color: #0724ef;
        background-color: #eee;
        border-radius: 5px;
        text-shadow: 1px 1px green;
    }
`;
