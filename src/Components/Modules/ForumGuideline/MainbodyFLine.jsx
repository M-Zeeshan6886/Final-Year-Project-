import React from "react";
import Bodyleftbar from "../../../Common Components/MainbodyLeft/Bodyleftbar";
import "./MainbodyFLine.scss";

const MainbodyFLine = () => {
  return (
    <>
      <div className="FLine-container">
        <div className="FLine-container-content-left">
          <Bodyleftbar />
        </div>
        <div className="FLine-container-content-right">
          <h1>Forums Guidelines</h1>
          <h2>Supportive</h2>
          <p>
            We encourage our members to give and receive support, sharing their
            stories and experiences in times of distress and wellness.
          </p>
          <h2>Respectful</h2>
          <p>
            We respect where members are on their recovery journey and listen
            without judgment. Appreciate that others may have an opinion
            different from yours. If you see abuse, report it to us using the
            ‘report post’ button on the Forums.
          </p>
          <h2>Empowering</h2>
          <p>
            We empower our members to make decisions that support good mental
            health and wellbeing. Don't hold back in sharing your knowledge –
            it's likely someone will find it useful or interesting. When you
            give information, provide your sources.
          </p>
          <h2>Safe</h2>
          <p>
            We support our members to talk openly about difficult subjects in a
            safe manner. Remember that the Forums are public. Don't post
            personal information that you wouldn’t be comfortable sharing with a
            stranger. We recommend you use only your first name or a pseudonym
            in your username and that you don't post any information that may
            identify you or anyone else, such as your address, email address or
            phone number.
          </p>
          <h2>Friendly</h2>
          <p>
            We approach all our discussions with kindness, warmth and always
            assume the best intentions. Welcome new members, share your tips or
            show them how to use the website. If you are a new member, make sure
            to introduce yourself – our community is waiting for you.
          </p>
          <p>It will also be helpful if you:</p>
          <p>
            {" "}
            <b>Stay on topic.</b> When creating a new discussion, give a clear
            topic title and put your post in the appropriate category. When
            contributing to an existing discussion, try to stay 'on topic'. If
            something new comes up within a subject that you would like to
            discuss, start a new discussion.
          </p>
          <p>
            {" "}
            <b>One account per person.</b> Running multiple identities on our
            Forums is not permitted. If you are unable to access your account,
            please get in touch with us rather than creating a new one.
          </p>
          <h2>We maintain the right to remove posts and threads</h2>
          <p>
            We need to make sure that material posted on the Forums is not
            potentially harmful. For this reason, we may edit or choose not to
            publish any post, profile image or display name that:
          </p>
          <li>
            contains disrespectful or derogatory remarks about any other member
          </li>
          <li>
            contains advice or content that we believe is damaging, unhelpful or
            distressing to others
          </li>
          <li>contains links</li>
          <li>
            contains swearing or offensive language is nonsensical and/or
            irrelevant
          </li>
          <li>
            promotes personal beliefs in a way that is disrespectful of the
            choices of others
          </li>
          <li>infringes the privacy of individuals or service providers</li>
          <li>
            is racist, sexist, homophobic, sexually explicit or suggestive,
            abusive or otherwise discriminatory or objectionable
          </li>
          <li>advertises products, services, events or research</li>
          <li>
            makes any reference to specific prescription medication names and/or
            dosages or seeks medical advice
          </li>
                {/* <li>
                    includes personal information such as images clearly displaying your
                    face, full names, phone numbers, locations, postal or
                        &nbsp;      email addresses; or encourages the sharing of such details
                </li> */}
          <li>
            puts overt pressure on other members to respond, including 'goodbye'
            messages
          </li>
          <li>
            makes attempt to facilitate personal offline contact with other
            members
          </li>
          <li>
            describes or encourages violence, suicide or other activity which
            could endanger the safety or wellbeing of others
          </li>
          <li>
            contains methods or detail of suicide, self-harm or sexual abuse
          </li>
          <li>
            is a copy of another post or contains the same, or similar, message
            posted multiple times elsewhere
          </li>
          <li>contains references to edits or moderation</li>
          <li>
            is more than 2,500 characters in length or submitted in multiple
            parts to avoid the character limit
          </li>
          <li>is made from duplicate accounts</li>
          <h2>Ending your time with us</h2>
          <p>You may request at any time that your account be cancelled from the website.</p>
          <p>By doing so, you understand and agree that we may retain your personal information for up to six months from the date of your request and that all activity associated with your account that was generated prior to the date of your cancellation request will remain permanently on the website (for example, your posts in the forums will not be deleted).</p>
        </div>
      </div>
    </>
  );
};

export default MainbodyFLine;
