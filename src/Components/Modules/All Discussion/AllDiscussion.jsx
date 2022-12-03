import React from 'react';
import NavbarOne from '../../../Common Components/Navbar/Navbarbefor';
import Adheader from './Ad-Header/Ad-header';
import Hphoto from '../../../Components/assest/headerimg3.JPG'
import './AllDiscussion.scss';
import StartDiscussion from '../../Start-discussion/StartDiscussion';
import AdComnt from './Adcomntbox/AdComnt';
import profileimg from '../../assest/profileimg.png';
import Footer from '../../../Common Components/Footer/Footer';

const AllDiscussion = () => {
  return (
    <>
    <NavbarOne/>
    <Adheader  Heading="All Discussion" 
    Para="Any recent posts in the Forums. This includes all discussions, not just the ones you've engaged with." 
    Headerimg={Hphoto}
    />
    <StartDiscussion />
    <AdComnt profileImg={profileimg} profileName="Alone..Depressed..Sad.." date="05-08-2022"
    userName="David" diseaseName="Anxiety"
    cmntpara="Heres a question for all you amazing people on this site. Do you find yourselves coming up with crazy ideas in your head? Coming up with situations that couldn't possibly be true but convincing yourself otherwise, cooking up crazy and untrue thoughts. I find myself doing this alot. And it can stem from 1 (ex:a friends in a bad mood its my fault and they hate me) to 5(ex: hotel shampoo in drawer, your cheating) then to 10 (ex: my partner has killed and theirs a body in my back yard) After awhile (days..weeks..etc)"
    />

    
<AdComnt profileImg={profileimg} profileName="Introducing mmMekitty" date="05-08-2022"
    userName=" mmMekitty" diseaseName="PTSD and truma"
    cmntpara="Heres a question for all you amazing people on this site. Do you find yourselves coming up with crazy ideas in your head? Coming up with situations that couldn't possibly be true but convincing yourself otherwise, cooking up crazy and untrue thoughts. I find myself doing this alot. And it can stem from 1 (ex:a friends in a bad mood its my fault and they hate me) to 5(ex: hotel shampoo in drawer, your cheating) then to 10 (ex: my partner has killed and theirs a body in my back yard) After awhile (days..weeks..etc)"
    />


<AdComnt profileImg={profileimg} profileName="Just hate things, not like the joke of society" date="05-08-2022"
    userName="Joe_the_Innocent27..." diseaseName="Depression"
    cmntpara="Heres a question for all you amazing people on this site. Do you find yourselves coming up with crazy ideas in your head? Coming up with situations that couldn't possibly be true but convincing yourself otherwise, cooking up crazy and untrue thoughts. I find myself doing this alot. And it can stem from 1 (ex:a friends in a bad mood its my fault and they hate me) to 5(ex: hotel shampoo in drawer, your cheating) then to 10 (ex: my partner has killed and theirs a body in my back yard) After awhile (days..weeks..etc)"
    />

<AdComnt profileImg={profileimg} profileName="Alone..Depressed..Sad.." date="05-08-2022"
    userName="David" diseaseName="Anxiety"
    cmntpara="Heres a question for all you amazing people on this site. Do you find yourselves coming up with crazy ideas in your head? Coming up with situations that couldn't possibly be true but convincing yourself otherwise, cooking up crazy and untrue thoughts. I find myself doing this alot. And it can stem from 1 (ex:a friends in a bad mood its my fault and they hate me) to 5(ex: hotel shampoo in drawer, your cheating) then to 10 (ex: my partner has killed and theirs a body in my back yard) After awhile (days..weeks..etc)"
    />

<AdComnt profileImg={profileimg} profileName="Alone..Depressed..Sad.." date="05-08-2022"
    userName="David" diseaseName="Anxiety"
    cmntpara="Heres a question for all you amazing people on this site. Do you find yourselves coming up with crazy ideas in your head? Coming up with situations that couldn't possibly be true but convincing yourself otherwise, cooking up crazy and untrue thoughts. I find myself doing this alot. And it can stem from 1 (ex:a friends in a bad mood its my fault and they hate me) to 5(ex: hotel shampoo in drawer, your cheating) then to 10 (ex: my partner has killed and theirs a body in my back yard) After awhile (days..weeks..etc)"
    />

<Footer />

    </>
  )
}

export default AllDiscussion;