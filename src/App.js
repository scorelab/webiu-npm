import React from 'react'
import { ButtonComponent } from 'components/ButtonComponent'
import { ContactComponent } from 'components/ContactComponent'
import { AboutComponent } from 'components/AboutComponent'
import { AnnouncementComponent } from 'components/AnnouncementComponent'
import { CardComponent } from 'components/CardComponent'
import { ComingsoonComponent } from 'components/ComingsoonComponent'
import { CarouselComponent } from 'components/CarouselComponent'
import { DescriptionComponent } from 'components/DescriptionComponent'
import { FaqComponent } from 'components/FaqComponent'
import { FooterComponent } from 'components/FooterComponent'
import { HeaderComponent } from 'components/HeaderComponent'
import { LetterAvatar } from 'components/LetterAvatar'
import { ImageAvatar } from 'components/ImageAvatar'
import { Partner } from 'components/Partner'
import { SignupAndLogin } from 'components/SignupAndLogin'
import { Pricing } from 'components/Pricing'
import { PageNotFound } from 'components/PageNotFound'
import { Statistics } from 'components/Statistics'
import { Spinners } from "components/Spinners"
import { Stepper } from 'components/Stepper'
import { GoogleMap } from 'components/GoogleMap'
import { TrustedBy } from 'components/TrustedBy'
import { Guidelines } from 'components/Guidelines'
import { ImageGrid } from "components/ImageGrid"
import { SearchBar } from 'components/SearchBar'
import { Testimonial } from 'components/Testimonial'
import { Timestamp } from 'components/Timestamp'
import { VideoPlayer } from 'components/VideoPlayer'
import { LinksList } from 'components/LinksList/LinksList'
import { ProgressBar } from 'components/ProgressBar'
import { NavBar } from 'components/NavBar'
import { GithubContributors } from 'components/GithubContributors'
import { GithubOrg } from "components/GithubOrg"
import { GithubOrgMembers } from "components/GithubOrgMembers"
import { GithubRepo } from "components/GithubRepo"
import { GithubUser } from "components/GithubUser"
import { GitterRoomsList } from 'components/GitterRoomsList'
import { GsocIdeaList } from "components/GsocIdeaList"
import { JobOpenings } from 'components/JobOpenings'
import { ListPagination } from "components/ListPagination"
import { MediumFeed } from 'components/MediumFeed/MediumFeed'
import { MailingListFeed } from 'components/MailingListFeed'
import { ProjectsList } from "components/ProjectsList"
import { ProjectDetail } from 'components/ProjectDetail'
import { PublicationsList } from "components/PublicationsList"
import { Timeline } from 'components/Timeline'
import { Team } from "components/Team"
import { SocialMedia } from 'components/SocialMedia'
import { Typewriter } from 'components/Typewriter'

export const App = () => {
    return (
      <div>
        <HeaderComponent mainText="WELCOME TO SCoRe LAB" 
                         subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." 
                         buttonText="Explore" buttonLink="/"
                         image="https://scorelab.org/images/community.png" small={false} />

        <SignupAndLogin signupMessage="Signup" loginMessage="Login" handleSignup={() => {}} handleLogin={() => {}} />

        <CardComponent header="Services Component" card={false} services={true} buttonText="All Services" buttonLink="/"
                       data={[{image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/software-engineer.svg", 
                               title: "DEVELOPMENT", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                              {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/website-structure.svg", 
                               title: "WEBSITE", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                              {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/data-scientist.svg", 
                               title: "ANALYTICS", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"}]} />

        <CarouselComponent data={[{title: "LabelLab", content: "Lorem ipsum sample data", 
                                   image: "https://scorelab.org/logos/projects/labellab.png"},
                                  {title: "Dronesym", content: "Lorem ipsum sample data", 
                                   image: "https://scorelab.org/logos/projects/dronesym.png"},
                                  {title: "Senz", content: "Lorem ipsum sample data", 
                                   image: "https://scorelab.org/logos/projects/senz.png"}]}
                           header="Carousel" />

        <ComingsoonComponent header="Countdown" image="https://scorelab.org/images/joinTeam.png" buttonLink="/" 
                             countdownText="Coming soon!" deployDate="1 Jan, 2022 00:00:00" buttonText="Explore" 
                             message="The new version of this package is coming soon!" />

        <ButtonComponent buttonText="Button" heading="Button Component" buttonWidth="350px" />

        <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to News" contactMessage="Contact us" 
                          subscribeMessage="Subscribe to Newsletter" />

        <AboutComponent header="About Component" mainText="Welcome to SCoRe Lab" subText="This is a description text" 
                        buttonText="Explore" buttonLink="/" image="https://scorelab.org/images/community.png" />

        <AnnouncementComponent header="Announcements" speed="2" title="Announcements" direction="up" 
                               data={[{text: "Notice 1", link: "/"}, {text: "Notice 2", link: "/"}]} />

        <CardComponent header="Card Component" card={true} services={false}
                       data={[{image: "https://scorelab.org/logos/projects/dronesym.png", title: "Dronesym", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                               buttonText: "All Services", buttonLink: "/"},
                              {image: "https://scorelab.org/logos/projects/parks.png", title: "Parks", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                               buttonText: "All Services", buttonLink: "/"},
                              {image: "https://scorelab.org/logos/projects/bassa.png", title: "Bassa", 
                               description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                               buttonText: "All Services", buttonLink: "/"}]} />  

        <DescriptionComponent title="Description Container" 
                              subTitle="This component can be used to declare description regarding of a particular instance"
                              image="https://scorelab.org/images/community.png"
                              mainText="Your main text here"
                              sideComponent={{content: "content of side component"}}/>

        <FaqComponent header="Frequently Asked Questions"
                      data={[{title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                              content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                              content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                              content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                              content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                             {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                              content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},]} />

        <LetterAvatar name="Yash Vardhan" bgColor="green" />

        <Partner header="Partner-With-Us" mainText="Collaborate with us" contactText="contact us" contactLink="/" 
                 buttonText="Form" buttonLink="/" image="https://scorelab.org/images/joinTeam.png" 
                 subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." />

        <Pricing title="Subscription Charges" header="Pricing" description="sample-description"
                 plans={[{plan: "BASIC", description: "sample", price: 30, 
                          items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                          buttonText: "Explore", buttonLink: "/"},
                         {plan: "ADVANCE", description: "sample", price: 40, 
                          items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                          buttonText: "Explore", buttonLink: "/"},
                         {plan: "PRO", description: "sample", price: 50, 
                          items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                          buttonText: "Explore", buttonLink: "/"}]} />
      
        <ImageAvatar image="https://yashvardhanportfolio.netlify.app/static/media/yash%20(2).ca34b90c.jpg" />

        <PageNotFound header="404 Component" image="https://scorelab.org/images/404.png" mainText="PAGE NOT FOUND" 
                      subText="The requested page does not exists" />

        <Statistics header="Statistics" title="Numbers At a Glance" 
                    description="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools."
                    image="https://scorelab.org/images/community.png" 
                    data={[{name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, 
                           {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}]} />

        <Spinners animation="border" variant="success" size="md"
                  icon={true} spinner={true} />

        <Stepper direction="vertical" currentStep={2} 
                 steps={["Fork the Project", "Clone the Repo", "Local Setup", "Talk to Community", "Send PRs", "PRs get reviewed"]} />

        <Stepper direction="horizontal" currentStep={4} 
                 steps={["Fork the Project", "Clone the Repo", "Local Setup", "Talk to Community", "Send PRs", "PRs get reviewed"]} />
        
        <GoogleMap mapId="pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin" 
                   header="Map" width="90%" height="500px" />

        <TrustedBy title="Our Collaborators" column={2}
                   description="Proud Collaborators and Industry Partners"
                   data={[{img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/kotton.jpg", text: "Kotton"},
                   {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/edge.jpg", text: "Edge"},
                   {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/version2.jpg", text: "Version 2.0"},
                   {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/noon.jpg", text: "Neon"},
                   {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/jcnichols.jpg", text: "Nichollas"},
                   {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/pet-wise.jpg", text: "Petwise"},]} />

        <Guidelines heading="Guidelines" description="These are some guidelines"
                    guidelines={["Introduce yourself to community", "Look for issues", "Resolve and PR"]} />
       
        <ProgressBar data={[{bgcolor: "#51ad28", completed: 80, text: "EXAMPLE 1"}, 
                            {bgcolor: "#E33F3F", completed: 60, text: "EXAMPLE 2"}, 
                            {bgcolor: "#24598B", completed: 90, text: "EXAMPLE 3"}]} colHeight={25} colWidth="300px" />

        <ImageGrid size={6} images={[{imageUrl: "https://scorelab.org/images/community.png", imageText: "SCoRe Lab"}, 
                                     {imageUrl: "https://scorelab.org/images/joinTeam.png", imageText: "OUR TEAM"}]} 
                   header="ImageGrid" row={false}
                   categories={false} categoryData={[{text: "text", color: "#e52165", route: "/", image: "https://scorelab.org/images/community.png"}]} />

        <SearchBar handleSearch={() => console.log("Hello")} placeHolder="Search Items" header="Search Bar" />

        <Testimonial header="Testimonial"
                     data={[{name: "Yash", image: "https://desklib.com/static/src/assets/images/v2/profile_1.svg", 
                             description: "What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.", 
                             rating: "5"},
                            {name: "Harshita", image: "https://desklib.com/static/src/assets/images/v2/profile_2.svg", 
                            description: "What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.", 
                            rating: "4"}]} />

        <Timestamp image="https://scorelab.org/images/community.png" firstName="SCoRe Lab" buttonText="Home" 
                   buttonLink="/" message="sample-message" />

        <LinksList links={[{"name": "Sample1", "url": "https://google.com"},
                           {"name": "Sample2", "url": "https://google.com"},
                           {"name": "Sample3", "url": "https://google.com"},]} 
                   isIcon={true} iconName="faLink" />
        
        <VideoPlayer width="350px" height="215px" videoSrcURL="https://www.youtube.com/embed/GuvAMcsoreI" title="Gatsby Js Tutorial" 
                     header="Video" />

        <NavBar logo="https://scorelab.org/logos/main-logo.jpeg"
                links={[{path: "sample-link", isSpecial: false, isExternal: false, name: "Home"}, 
                        {path: "sample-link", isSpecial: false, isExternal: false, name: "Team"}, 
                        {path: "sample-link", isSpecial: false, isExternal: false, name: "Projects"}, 
                        {path: "sample-link", isSpecial: false, isExternal: false, name: "Services"}, 
                        {path: "sample-link", isSpecial: false, isExternal: true, name: "Pricing"}, 
                        {path: "sample-link", isSpecial: true, isExternal: false, name: "Contact"},]}  />

        <GithubContributors projectname="scorelab/webiu" title="Contributors of" limit={10}
                            auth_token="sample-token" showSearchBar={true} />

        <GithubOrg orgname="scorelab" title="GitHub Organization" limit={12} auth_token="sample-token" />

        <GithubOrgMembers orgname="scorelab" title="GitHub Community of" limit={10}
                          auth_token="sample-token" showSearchBar={true} />

        <GithubRepo reponame="scorelab/webiu" title="GitHub Repository" auth_token="sample-token" />

        <GithubUser username="grumpyyash" title="Github Profile" auth_token="sample-token" />

        <GitterRoomsList title="Gitter Room List" gitterOrganizationName="SCoRe Lab" groupId="57542d64c43b8c601977c479" 
                         gitterToken="4d6b01370f1f21d7314b96c21f31a28ea06d0c66" small={false} limit={9} />

        <GsocIdeaList heading="GSoC IdeaList" defaultActiveKeys={['0']}
                      description="Lorem ipsum sample description fot the idea list of the organization for google summer of code participation" 
                      listItems={[{title: "sample", description: "sample", expectedresults: "sample", possiblementors: "sample", requiredknowledge: "sample", githuburl: "sample"},
                                  {title: "sample", description: "sample", expectedresults: "sample", possiblementors: "sample", requiredknowledge: "sample", githuburl: "sample"}]}
                      previousProjects={[{year: "2020", link: "sample-link"},
                                        {year: "2019", link: "sample-link"},
                                        {year: "2018", link: "sample-link"},
                                        {year: "2017", link: "sample-link"}]}
                />

        <JobOpenings title="Current Openings" 
                     openings={[{title: "sample-title", description: "sample-description", applyLink:"https://www.google.com", 
                                 skillRequirements: ["Python", "Flask", "Data Science", "NLP", "OpenCV"]},
                                 {title: "sample-title", description: "sample-description", applyLink:"https://www.google.com", 
                                 skillRequirements: ["Python", "Flask", "Data Science", "NLP", "OpenCV"]}]} />

        <ListPagination pageSize={8} total={24} onChange={()=>{}} />

        <MediumFeed title="Recent Blogs" mediumUrl="https://medium.com/feed/scorelab" small={false} limit={6}/>

        <MailingListFeed title="Mailing List Feed" feedUrl="https://groups.google.com/forum/feed/score-community/msgs/rss.xml?num=50" 
                         small={false} />

        <ProjectsList title="Projects" showSearchBar={true} searchPlaceHolder="Search Projects" limit={10}
                     items={[{title: "Bassa", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/bassa.png", slug: "/basaa"},
                             {title: "ASSET", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/asset.png", slug: "/asset"},
                             {title: "DroneSym", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/dronesym.png", slug: "/dronesym"},
                             {title: "Elly", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/elly.png", slug: "/elly"},
                             {title: "D4D", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/d4d.png", slug: "/d4d"},
                             {title: "Parks", description: "Lorem ispum text is a very popular tool to fill sampel data with some random text. Its origin can be attributed to a long time ago with its neccesity", 
                              image: "https://scorelab.org/logos/projects/parks.png", slug: "/parks"},]} />

        <ProjectDetail project={{image: "https://scorelab.org/logos/projects/bassa.png",
                                title: "Bassa",
                                description: "Bassa is automated Download Queue for Enterprise to take the best use of Internet bandwidth. It solves the problem of wasting internet bandwidth by queuing a download if it is larger than a given threshold value in high traffic and when the traffic is low, it completes the download of the files.",
                                screenshots: [{imageUrl: "https://scorelab.org/images/screenshots/Bassa/1.png"}, {imageUrl: "https://scorelab.org/images/screenshots/Bassa/2.png"}],
                                links: [{url: "https://github.com/scorelab/Bassa", name: "Github Repo"}, {url: "https://gitter.im/scorelab/Bassa", name: "Gitter Channel"}]}}
                                />

        <PublicationsList title="Research Journels" limit={10} suffle={false} publications={true} achievements={false}
                          items={[{title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
                                   authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/"},
                                  {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
                                   authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/"},
                                  {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
                                   authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/"},
                                  {title : "Mobile ATM for developing countries", conference: "Computer Science and Education(ICCSE), 2013 8th International Conference on - 2013", 
                                   authors: ["Amila Karunanayke", "Kasun De Zoysa", "Sead Muftic"], slug: "/"}]} />

        <Timeline header="Timeline component" height="1200px"
                  data={[{text: 'Choose the Organization', date: 'July 23 2021', category: {tag: 'GSoC', color:'black'}, link: {url: '/', text: 'Explore'}},
                         {text: 'Set up project', date: 'July 24 2021', category: {tag: 'GSoC', color:'orange'}, link: {url: '/', text: 'Explore'}},
                         {text: 'Open a Pull Request', date: 'July 25 2021', category: {tag: 'GSoC', color:'red'}, link: {url: '/', text: 'Explore'}},
                         {text: 'Code gets merged', date: 'July 26 2021', category: {tag: 'GSoC', color:'green'}, link: {url: '/', text: 'Explore'}},]} />

        <Team
                title="Team Component" showSearchBar={true}
                contributors={[{name: "Chathura Suduwella", title: "BSc Joint Major", image: ""}, {name: "Charith Elvitigala", title: "BSc in Computer Science", image: ""}, {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: ""}, {name: "Kasun De Zoysa", title: "SCoRe Contributor", image: ""}]}
                alumni={[{name: "Chathura Suduwella", title: "BSc Joint Major", image: ""}, {name: "Charith Elvitigala", title: "BSc in Computer Science", image: ""}, {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: ""}]}
                heads={[{name: "Chathura Suduwella", title: "BSc Joint Major", image: ""}, {name: "Charith Elvitigala", title: "BSc in Computer Science", image: ""}]}
                researchers={[{name: "Chathura Suduwella", title: "BSc Joint Major", image: ""}, {name: "Charith Elvitigala", title: "BSc in Computer Science", image: ""}, {name: "Namal Jayasuriya", title: "BSc in Computer Science", image: ""}]}
        />

        <SocialMedia facebookProfile="SCoRe.Lab.Org" twitterProfile="gsoc"
                     header="Facebook and Twitter" width="330px" height="340px" />

        <Typewriter header="Typewriter" wait={100} color="" staticText="I AM A"
                    words={["DEVELOPER", "PROGRAMMER", "DEBUGGER"]} />

        <FooterComponent socialLinks={{facebook: "/", gitter: "/", twitter: "/", github: "/", 
                                       linkedin:"/", medium:"/"}} mainText="Copyright © SCoRe Lab" />

      </div>
    )
}
