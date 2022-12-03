import React from 'react'
import './DMainbody.scss';
import Bodyleftbar from '../MainbodyLeft/Bodyleftbar'
import Pincomnt from './Pincomnt';
import profileimg from '../../Components/assest/profileimg.png';
import StartDiscussion from '../../Components/Start-discussion/StartDiscussion';

const DMainbody = () => {
  return (
    <>
    <div className='DMainbody-container'>
            <div className='DMainbody-container-content-left'>
           <Bodyleftbar />
            </div>
            <div className='DMainbody-container-content-right'>
            <h1>Pin Discussion</h1>
            <Pincomnt  profileimg={profileimg}  profileName="Disease Topic Tittle"
            replyes="replies:757" 
            Para="Disease discription(details)
            hey there, what physical symptoms of anxiety do you experience? I often feel very alone in my experience of having physical chest (what I think are heart) spasms and was wanting to create a space for everyone to list their physical feelings that come hand in hand with anxiety so we can all feel less alone. hope everyone is well."
            DiseaseName="DiseaseName(Anxiety..etc)" UserName="UserName(Hales..etc)" date="22-08-2021"
            />

<Pincomnt  profileimg={profileimg}  profileName="Disease Topic Tittle"
            replyes="replies:757" 
            Para="Disease discription(details)
            hey there, what physical symptoms of anxiety do you experience? I often feel very alone in my experience of having physical chest (what I think are heart) spasms and was wanting to create a space for everyone to list their physical feelings that come hand in hand with anxiety so we can all feel less alone. hope everyone is well."
            DiseaseName="DiseaseName(Anxiety..etc)" UserName="UserName(Hales..etc)" date="22-08-2021"
            />
         
         <StartDiscussion />

<Pincomnt  profileimg={profileimg}  profileName="Disease Topic Tittle"
            replyes="replies:757" 
            Para="Disease discription(details)
            hey there, what physical symptoms of anxiety do you experience? I often feel very alone in my experience of having physical chest (what I think are heart) spasms and was wanting to create a space for everyone to list their physical feelings that come hand in hand with anxiety so we can all feel less alone. hope everyone is well."
            DiseaseName="DiseaseName(Anxiety..etc)" UserName="UserName(Hales..etc)" date="22-08-2021"
            />
          

          <Pincomnt  profileimg={profileimg}  profileName="Disease Topic Tittle"
            replyes="replies:757" 
            Para="Disease discription(details)
            hey there, what physical symptoms of anxiety do you experience? I often feel very alone in my experience of having physical chest (what I think are heart) spasms and was wanting to create a space for everyone to list their physical feelings that come hand in hand with anxiety so we can all feel less alone. hope everyone is well."
            DiseaseName="DiseaseName(Anxiety..etc)" UserName="UserName(Hales..etc)" date="22-08-2021"
            />

<Pincomnt  profileimg={profileimg}  profileName="Disease Topic Tittle"
            replyes="replies:757" 
            Para="Disease discription(details)
            hey there, what physical symptoms of anxiety do you experience? I often feel very alone in my experience of having physical chest (what I think are heart) spasms and was wanting to create a space for everyone to list their physical feelings that come hand in hand with anxiety so we can all feel less alone. hope everyone is well."
            DiseaseName="DiseaseName(Anxiety..etc)" UserName="UserName(Hales..etc)" date="22-08-2021"
            />

            </div>
    </div>
    </>
  )
}

export default DMainbody;