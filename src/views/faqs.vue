<template>
  <v-app class="page-wrapper">
    <v-app id="inspire">
      <v-app-bar app color="black" dark>
        <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img>
        <v-btn transparent class="transparent" to="/">
          <v-toolbar-title class="text-uppercase yellow--text">
            <span class="font-weight-light">Sun</span>
            <span>Shine</span>
          </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn color="yellow" to="/whatwedo" text>What we do?</v-btn>
          <v-btn color="yellow" to="/ourimpact" text>Our Impact</v-btn>
          <v-btn color="yellow" to="/jointhemovement" text>Join the Movement</v-btn>
          <v-btn color="yellow" to="/donate" text>Donate</v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-content>
        <v-col>
          <div class="heading display-1 font-weight-black grey--text text-center">FAQS</div>
        </v-col>
        <br />
        <br />

        <v-expansion-panels>
          <v-toolbar color="yellow" height="40px">
            <v-toolbar-items class="text-center">
              <h4>VOLUNTEERING FAQS</h4>
            </v-toolbar-items>
          </v-toolbar>
          <v-expansion-panel
            v-for="(item,i) in items"
            :key="i"
            :question="item.question"
            :answer="item.answer"
          >
            <v-expansion-panel-header>
              <div class="subheading black--text">{{ item.question }}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="black--text">{{item.answer}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br />

        <v-expansion-panels>
          <v-toolbar color="yellow" height="40px">
            <v-toolbar-items class="text-center">
              <h4>APPLICATION FAQS</h4>
            </v-toolbar-items>
          </v-toolbar>
          <v-expansion-panel
            v-for="(application,i) in applications"
            :key="i"
            :question="application.question"
            :answer="application.answer"
          >
            <v-expansion-panel-header>
              <div class="subheading black--text">{{ application.question }}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="black--text">{{application.answer}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br />

        <v-expansion-panels>
          <v-toolbar color="yellow" height="40px">
            <v-toolbar-items class="text-center">
              <h4>DONATION FAQS</h4>
            </v-toolbar-items>
          </v-toolbar>
          <v-expansion-panel
            v-for="(donation,i) in donations"
            :key="i"
            :question="donation.question"
            :answer="donation.answer"
          >
            <v-expansion-panel-header>
              <div class="subheading black--text">{{ donation.question }}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="black--text">{{donation.answer}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-content>

      <v-footer color="black" app>
        <span class="yellow--text">&copy; (Webmasters-2019)</span>
        <v-toolbar-items class="justify-center">
          <v-btn color="yellow" to="faqs" class="white--text" text>FAQs</v-btn>
          <v-btn color="yellow" to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
          <v-btn color="yellow" to="/contact" class="white--text" text>Contact us</v-btn>
        </v-toolbar-items>
        <template>
          <div class="flex-grow-1"></div>
          <v-btn id="iconbtn" icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn id="iconbtn" icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn id="iconbtn" icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn id="iconbtn" icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn id="iconbtn" icon>
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </template>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          question: "HOW CAN I APPLY TO THE SUNSHINE FOUNDATION VOLUNTEERING?",
          answer:
            "Please visit www.sunshinefoundation.com to apply to the volunteering."
        },
        {
          question: "WHY SHOULD I JOIN SUNSHINE FOUNDATION?",
          answer:
            "Sunshine Foundation offers you the chance to make a real difference in tackling one of India’s most pressing challenges — educational inequity. By presenting you with one of the most difficult challenges of your life, the volunteering will help you develop leadership skills that are critical in today’s dynamic global work environment. The volunteering Program gives you an opportunity to become a part of the solution and a change agent in the society."
        },
        {
          question: "WHO ARE WE LOOKING FOR?",
          answer:
            "Sunshine Foundation is looking for potential volunteers who have exhibited academic proficiency, demonstrated leadership, strong organizational skills, hold a graduate degree and are inclined to make a commitment to the community. Students and professionals with a Bachelor’s Degree at the time of joining the volunteering are invited to apply. Please Click Here to go through all the eligibility criteria in detail."
        },
        {
          question: "WHAT DOES THE SUNSHINE FOUNDATION VOLUNTEERING ENTAIL?",
          answer:
            "The two-year commitment is necessary to make the impact we wish to have on student achievement. In the first year, volunteers will refine their teaching skills and will start to establish respect and trust among various stakeholders within the school community and the students. This will allow volunteers to achieve significant academic gains for students and to implement their community/school project in the second year. Furthermore, Sunshine Foundation is looking for leaders who are willing to commit to long-term change and have the perseverance to work hard in challenging situations. In this context, the two-year commitment is but a small step towards long-term reform."
        },
        {
          question:
            "HOW MANY VOLUNTEERS DOES SUNSHINE FOUNDATION CURRENTLY HAVE?",
          answer:
            "Sunshine Foundation currently has approximately 1100 volunteers, teaching across 7 cities and 2500 Alumni. In 2015, Bengaluru became a part of Sunshine Foundation’s placement cities adding to our existing presence in the cities of Mumbai, Pune, Delhi, Chennai, Hyderabad and Ahmedabad. Sunshine Foundation Volunteers are teaching approximately 38,000 children in these cities."
        },
        {
          question: "WHAT ARE THE PROFILES OF SUNSHINE FOUNDATION VOLUNTEERS?",
          answer:
            "Sunshine Foundation volunteers are a diverse group of people, brought together by their past achievements and their passion to eliminate educational inequity. They come from diverse backgrounds of colleges such as IITs, IIMs, St.Stephen’s College, St. Xavier’s College, Christ University, Presidency College etc and companies such as Accenture, McKinsey, Mahindra & Mahindra, IBM, Ernst & Young, Schlumberger etc. By joining the volunteering, you will get an opportunity to work with some of the brightest and most enterprising minds of the country."
        },
        {
          question:
            "HOW DOES SUNSHINE FOUNDATION'S APPROACH TO TEACHING DIFFER FROM TRADITIONAL APPROACHES?",
          answer:
            "At Sunshine Foundation, we believe that Teaching is Leadership. For our volunteers and Students to be leaders, we focus on building skills and mindsets through our Leadership Development Journey. The LDJ takes volunteers through 8 milestones in which they explore where their classroom is on the Student Vision Scale, where they are on the Volunteer Commitments Scale, what Competencies they need to work on and which Opportunities they can avail of to work on those. This is a cycle to build reflective practice throughout the journey. The Student Vision Scale defines the kind of Academic Achievement, Values and Mindsets and Exposure and Access our students need to have path-changing learning and make them student leaders. The Volunteer Commitments Scale defines the three commitments, to Personal Transformation, to Collective Action and to Education Equity that all of us in the movement need to be leaders who will go on to eliminate educational inequity in the country."
        },
        {
          question: "WHERE WILL I BE TEACHING?",
          answer:
            "Sunshine Foundation volunteers will be placed in low-income schools in Mumbai, Pune, Delhi, Chennai, Hyderabad, Ahmedabad and Bengaluru. All volunteers will be required to reside in one of these cities during the period of the volunteering. If you are unable to do so, please note that we will expand into more cities in the upcoming years, and hope to be in 10 cities and their surrounding rural areas within the next 5 years."
        },
        {
          question: "HOW MUCH WILL I BE PAID DURING THE VOLUNTEERS?",
          answer:
            "Sunshine Foundation volunteers will be paid a salary of Rs. 20,412 per month. If required to relocate from their home city, volunteers will be given a housing allowance ranging from Rs.5,300 to 10,000, depending on the city in which they will stay. In addition, volunteers will receive an allowance for school supplies."
        },
        {
          question: "WHAT OPTIONS WILL BE OPEN TO ME AFTER THE VOLUNTEERS?",
          answer:
            "Sunshine Foundation's fifth cohort of volunteers graduated in April, 2015. Our 2500 Alumni are now spread all over the country and abroad in jobs ranging from consulting to education startups; and as students in top universities such as Harvard, Cornell, Chicago Booth, Columbia and Tata Institute of Social Sciences. Sunshine Foundation supports its volunteers to pursue their individual career interests by training and mentoring them and striving to build relationships with top schools, universities, NGOs, and corporate throughout the country. Sunshine Foundation has already established close ties with HDFC, Godrej Industries, Harvard Business School, IIM Bangalore, ISB, McKinsey & Company, Tata Consultancy Services, Columbia Law School, Ernst & Young and the Thermax Group, among many others."
        },
        {
          question:
            "IF I CAN'T APPLY TO THE VOLUNTEERING NOW, CAN I APPLY AT A LATER DATE?",
          answer:
            "Sunshine Foundation will accept applications for the volunteering every year. If you are unable to consider joining the volunteering at this time, we welcome you to consider applying for the volunteering in the subsequent years. However, before making the decision, please write to us apply@sunshinefoundation.org and we would be glad to address your concerns and see if we can make it work for the upcoming year. For questions on the Application Form and Selection process, please see Admission and Application FAQs below. Please email us at apply@sunshinefoundation.org if you have additional queries."
        }
      ],
      applications: [
        {
          question: "HOW CAN I SAVE THE APPLICATION FORM?",
          answer:
            "The online application is designed to let you complete various sections in your own time before you submit the final version. Please ensure that you click on “Save Section” button at the bottom of every section before moving on to another section. The Admissions team will only review your application once you submit it. They will NOT look at your application while you are still working on it."
        },
        {
          question:
            "IN SPITE OF REGISTERING, WHY HAVE I NOT RECEIVED AN EMAIL YET?",
          answer:
            "We are sure our system is completely compatible with email services such as Gmail and Yahoo. However, there are certain email services such as Hotmail that have a highly restrictive email filter and hence, it could be the case that the email we sent did not get delivered to you. We request you to register using a Gmail or Yahoo account. Also, please check your Spam/Junk folder to ensure the email has not gotten delivered there. If you have still not received the email, please email apply@sunshinefoundation.org and we will get back to you within 48 hours."
        },
        {
          question: "WHEN IS THE APPLICATION DEADLINE?",
          answer:
            "We have 4 application deadlines for the 2020 volunteering Program. The application deadlines are: Deadline 1: Sunday, August 25th, 2019, 10:00 PM IST Deadline 2: Sunday, October 20th 2019, 10:00 PM IST Deadline 3: Sunday, December 15th 2019, 10:00 PM IST Deadline 4: Sunday, March 1st 2020, 10:00 PM IST"
        },
        {
          question:
            "WHAT IS THE ADMISSION CRITERIA TO APPLY TO THE 2020 SUNSHINE FOUNDATION VOLUNTEERING PROGRAM?",
          answer:
            "(a) Minimum Qualification: You must have completed all coursework required for your undergraduate degree (Bachelor’s degree equivalent) from an accredited college or university by the last week of May 2020. Your degree transcripts (graduate/postgraduate certificates) will be reviewed before an admission decision can be taken. Applicants must also pass any coursework indicated in their transcripts at the time of the interview. (b) Nationality: You should be either (i) an Indian citizen or (ii) a foreign national of Indian origin. Foreign citizens who are not of Indian origin are not eligible to apply. Note to Foreign nationals of Indian origin: For more information on the OCI card, please go to the Ministry of Home Affairs. To apply for the OCI card, please go to the Online OCI Registration Form. We recommend applying for the OCI card as soon as you have made the decision to join the volunteership, as it takes approximately 1-3 months to receive the card. (c) Commitment & Location: The volunteership is a full-time, paid commitment to teaching and living in one of our placement cities (Mumbai, Pune, Delhi, Chennai, Hyderabad, Ahmedabad, Bengaluru) starting May/June 2020. volunteers will be full-time staff members of the schools in which they are placed and will work stipulated school hours six days a week as well as attending training and support sessions as per city requirements. (d) English Fluency: You should be fluent in the English language as Sunshine Foundation volunteers will be placed in English-medium schools and will be expected to teach in and attend training sessions conducted in English. (e) Age Limit: There is no age limit to apply for Sunshine Foundation volunteership."
        },
        {
          question:
            "ON THE APPLICATION FORM, HOW DO I ENTER MY GPA/PERCENTAGE/CUMULATIVE AVERAGE?",
          answer:
            "Please check whichever measure is most relevant to you, and then fill in both your score and the base from which it was calculated. Please give only one measure. For example, if your institution uses “Cumulative Average” as its measure for academic achievement and your cumulative average is 8.0/10.0, please check “Cumulative Average”, and then fill in “8.0” on Score and “10.0” on Base. If your institution does not calculate any of these measures for you, you will have to calculate the average of the final grades of ALL of your coursework, and fill in the relevant information. If you are currently in your final year at college and hence do not have your final year graduation scores, please enter an average of your scores from all your previous years at college. Please note that if you attend an Assessment Centre, we will ask for copies of your mark sheets or transcripts to confirm the score you indicated."
        },
        {
          question: "WHY ARE THE ESSAYS IMPORTANT?",
          answer:
            "The essays are your chance to tell us about yourself and your interest for Sunshine Foundation. As they are extended answers with no upper word limit, you will be able to use them as an opportunity to demonstrate to us in detail why you are a strong candidate for the volunteership. Please therefore spend time developing your understanding of Sunshine Foundation - by reading our website, watching our short videos, speaking with staff, volunteers or Alumni or reading related articles – as well as thinking about what you want to tell us before writing your response. Please also ensure that you have checked your essays for spelling and grammar errors as well as to ensure that you have answered each question fully. We recommend that you draft your essays off-line before proof reading and then copy-pasting them onto the application form, to ensure that the essays you submit are of the highest quality."
        },
        {
          question: "WHEN WILL I HEAR BACK?",
          answer:
            "You will first hear back from us within ten working days of the deadline that you applied for. Round 1: Deadline Date: 25 August 2019 Application outcome date: 5 September 2019 Round 2: Deadline Date: 20 October 2019 Application outcome date: 4 November 2019 Round 3: Deadline Date: 15 December 2019 Application outcome date: 3 January 2020 Round 4: Deadline Date: 1 March 2020 Application outcome date: 13 March 2020"
        }
      ],
      donations: [
        {
          question:
            "HOW LONG WILL IT TAKE FOR ME TO RECEIVE MY TAX EXEMPTION CERTIFICATE/RECEIPT FOR MY DONATION?",
          answer:
            "Sunshine Foundation will send a Section 80G Income Tax Exemption receipt of your donation to the address you mention the in donation form or to the email address you provide within 2 weeks. [for Indian citizens only]"
        },
        {
          question: "HOW CAN I DONATE TO SUNSHINE FOUNDATION?",
          answer:
            "Donations to Sunshine Foundation can be made both online and offline. You can donate online by credit card/debit card/net banking using our secure donation page. You can donate offline by making a cheque in the name of “Teach To Lead” along with a cover letter stating your full name, address, PAN and the purpose of your donation ( eg. Towards Sponsor a Volunteer, Volunteer BTCP) and mailing to the following address: Sunshine Foundation Attn: Development Team Godrej One, 2nd Floor Pihanagar,Eastern Express Highway, Santacruz (East), Mumbai - 400 055, India"
        },
        {
          question:
            "WHICH AGENCIES ARE AUTHORISED TO COLLECT DONATIONS ON BEHALF OF SUNSHINE FOUNDATION?",
          answer:
            "Currently, the following 3 agencies collect donations on Sunshine Foundation’s behalf: Give India, Global Giving, United Way"
        },
        {
          question: "WILL I GET TAX EXEMPTIONS ON MY DONATIONS?",
          answer:
            "Yes, Sunshine Foundation (registered as Teach To Lead) has a certificate for Tax Exemption under Section 80G of the Income Tax Act, 1961. All donations to Sunshine Foundation are 50% exempt from tax under Section 80G. The tax exemption 80G is applicable only for donations made by Indian citizens / entities eligible for this exemption ."
        },
        {
          question:
            "I LIVE IN THE UNITED STATES AND/OR WOULD LIKE TO SUPPORT SUNSHINE FOUNDATION WITH A DONATION IN USD. WHAT SHOULD I DO?",
          answer:
            "All donors making donations in USD should donate directly to our US partner, Friends of Sunshine Foundation and NOT donate on the main Sunshine Foundation website. Friends of Sunshine Foundation (EIN 434525301) is based in New York City and is a registered 5(c)3 organization. All donations to Friends of Sunshine Foundation are tax-deductible in accordance with IRS regulations. If you would like to donate to Friends of Sunshine Foundation, please visit www.friendsofsunshinefoundation.org."
        },
        {
          question: "CAN FOREIGN CITIZENS DONATE ONLINE?",
          answer:
            "Yes, foreign nationals can donate online to Sunshine Foundation. For further queries please write to donate@sunshinefoundation.org"
        },
        {
          question: "WHAT WILL MY DONATION BE USED FOR?",
          answer:
            "Your donation will be used towards the volunteership, the alumni program, the projects in the innovation cell and/or the operation costs to fuel these programs in any of the 7 cities (Ahmedabad, Bangalore, Chennai, Delhi, Hyderabad, Mumbai and Pune )that Sunshine Foundation operates in.On an average Sunshine Foundation spends 13 % of funds raised on administration and the remainder on programmatic expenditure."
        },
        {
          question:
            "IF I AM A DONOR, CAN I VISIT A SUNSHINE FOUNDATION CLASSROOM?",
          answer:
            "You are welcome to visit a Sunshine Foundation classroom even if you are not a donor. However school visits require prior permissions to be taken by our volunteers. Please allow a one to two weeks before a visit can be scheduled. You can write to donate@sunshinefoundation.org with your request."
        },
        {
          question:
            "IF I HAVE AN URGENT REQUEST OR A PROBLEM RELATED TO MY DONATION, IS THERE A PHONE NUMBER WHERE I CAN REACH A MEMBER OF THE DONOR SERVICES TEAM?",
          answer:
            "Yes, please contact at: +91 22 22293846, 25234584 and ask for someone from the development team."
        },
        {
          question:
            "IF AS A CORPORATE, FOUNDATION OR INDIVIDUAL I WISH TO PARTNER WITH SUNSHINE FOUNDATION AND CONTRIBUTE MORE, WHOM SHOULD I CONTACT?",
          answer:
            "Sunshine Foundation partners with individuals, foundations and corporations. To discuss how we can partner with you or your organization, please write to us at donate@sunshinefoundation.org"
        }
      ]
    };
  },
  components: {}
};
</script>
<style>
#iconbtn {
  color: white;
}
</style>
