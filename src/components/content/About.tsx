import { Minus, Plus } from "@phosphor-icons/react";
import React, { useState } from "react";
import TextLink from "../atoms/Link";

const faqs: { question: string; answer: JSX.Element }[] = [
  {
    question: "What is Future Labour MPs?",
    answer: (
      <p>
        Future Labour MPs is a website and database where you can find
        information about many of the Labour Party general election candidates
        (PPCs, or prospective parliamentary candidates) most likely to be
        elected into Parliament at the next general election. You’ll find
        information about what these candidates have said and done on a host of
        issues, their backgrounds and social media pages.
      </p>
    ),
  },
  {
    question: "What is this tool for?",
    answer: (
      <p>
        This tool is for campaigners and local constituents to better understand
        who their future MP is and what they think. It can be used by
        campaigners to find allies among future MPs on the issues that matter
        and build useful relationships now, or for constituents to reach out to
        the candidates who will likely represent them in Parliament in the near
        future.
      </p>
    ),
  },
  {
    question: "Why have you made this tool?",
    answer: (
      <p>
        There’s lots of great resources that give us information about current
        MPs, including how they voted and who they have accepted donations from.
        But there’s often very little accessible information in one place about
        candidates standing for Parliament. Building awareness of candidates
        before they become MPs is essential for effective campaigning and
        informed voting.
      </p>
    ),
  },
  {
    question: ' How have you calculated "chance of winning"?',
    answer: (
      <p>
        Our measure is based on the Electoral Calculus "chance of winning"
        measure{" "}
        <TextLink link="https://www.electoralcalculus.co.uk/fcgi-bin/calcwork23.py?seat=Glasgow+North+East">
          (see an example here)
        </TextLink>
        . We have included Labour candidates who haven't been previously elected and
        have more than an 80% chance of winning (data collected December 2023).
      </p>
    ),
  },
  {
    question: "How have you chosen the candidates?",
    answer: (
      <>
        <p>
          We have chosen Labour candidates that are among the most likely to be
          elected as MPs, standing in seats where there are small (implied)
          majorities for the incumbent MP and where Electoral Calculus has them
          listed with a very high chance of winning (as of December 2023). This
          is not an exhaustive list, and there are some Labour candidates who
          have a high chance of becoming an MP who we haven’t yet included, but
          we are hoping to in time.
        </p>
        <p>
          We haven’t included General Election candidates who were previously
          MPs, as there is already lots of great information out there,
          including how they previously voted. They also tend to have bigger
          public profiles.
        </p>
      </>
    ),
  },
  {
    question: "Where have you got your information from? ",
    answer: (
      <p>
        All of the information we’ve included about candidates has been taken
        from publicly available sources, whether social media accounts,
        Companies House, candidate websites or news outlets. We relied on
        LabourList for some biographical detail. Where possible, we cite these
        sources.
      </p>
    ),
  },
  {
    question: "Why only Labour candidates?",
    answer: (
      <>
        <p>
          We don’t support any political party, but on current polling and by
          most predictions, Labour is likely to win a sizeable majority in the
          next General Election. This swing will mean potentially hundreds of
          new Labour MPs coming into Parliament next year, and they will be part
          of the governing Party. Relative to new MPs from other parties, new
          Labour MPs will potentially hold more influence within Westminster.
          There will also be many more of them.
        </p>
        <p>
          In the future, if we have more resources, we’d like to expand this
          database to include future MPs from more parties.
        </p>
      </>
    ),
  },
  {
    question: "Do you evaluate what candidates have said?",
    answer: (
      <p>
        You’ll see that the issues (e.g. ‘migration’) are colour coded: green
        for positive, red for negative and black for neutral. This isn’t an
        assessment of the candidates overall position on an issue, just an
        evaluation of the particular statement or action that we’ve referenced.
        How people vote on an issue as MPs is influenced by a variety of
        external factors, but we think this will be useful for campaigners
        looking to find allies.
      </p>
    ),
  },
  {
    question: "What do you mean by ‘majority (implied 2019)’?",
    answer: (
      <p>
        Because of the boundary changes most Parliamentary seats have changed,
        with some gaining new wards/areas and losing others. This means that if
        the 2019 General Election were held based on the new boundaries, in many
        seats the results would be different because of these changes. Electoral
        Calculus use the term ‘implied majority 2019’ to estimate what an MP’s
        majority would be were the 2019 election held on the new boundaries.
        This is a better way of getting a sense of an incumbent MP’s current
        majority under the new boundaries, though this doesn’t account for
        current polling. But that’s why we’ve also included Electoral Calculus’
        percentage chance of winning category, which does factor in polling.
      </p>
    ),
  },
  {
    question: "Who are you?",
    answer: (
      <p>
        This tool was made by skilled volunteer researchers from the{" "}
        <span>
          <TextLink link="http://mvmtresearch.org">
            Movement Research Unit
          </TextLink>
        </span>
        . We do practical research in support of social movements and campaign
        groups.
      </p>
    ),
  },
  {
    question: "This tool is great. How can I support you? ",
    answer: (
      <p>
        There are two ways: you can{" "}
        <span>
          <TextLink link="https://go.mvmtresearch.org/join">
            get involved
          </TextLink>
        </span>{" "}
         or you can{" "}
        <span>
          <TextLink link="https://donate.stripe.com/bIY6rig2w5ohat24gg">
            donate
          </TextLink>
        </span>{" "}
        to cover our running costs.
      </p>
    ),
  },
  {
    question: "I’m a candidate and the information you’ve included is wrong?",
    answer: (
      <p>
        We’re sorry! We’ve sourced all our information but the odd error might
        have crept through. Just send us an email at mps@mvmtresearch.org and
        we’ll update the website to correct any inaccuracies.
      </p>
    ),
  },
  
];

const About: React.FC = () => {
  return (
    <div className="max-w-[70rem] mx-auto pb-10">
      <h2 className="h2">About </h2>
      <div className="flex flex-col gap-2">
        <p>
          MPs can be difficult to build relationships with and influence. They
          have many commitments and lots of people competing for their time.
          This is a problem for campaign groups trying to find allies and build
          parliamentary support for their issue.
        </p>
        <p>
          Future Labour MPs helps you build relationships early. Search by issue
          or constituency to identify potential allies before they get into
          parliament.
        </p>
        <p>
          The next election is likely to be won by Labour. Our database shows
          Labour candidates who would be new to parliament and are very likely to get
          elected. It can be used to build relationships with this new cohort of
          Labour MPs and influence what the next Labour government does.
        </p>
        <p>
          This is the first version of this database and over the next few
          months we hope to expand the number of future MPs included in it.
        </p>
      </div>
      <h2 className="h2">FAQ</h2>
      <div className="accordion-group">
        {faqs.map((faq, idx) => (
          <FAQQuestion question={faq.question} answer={faq.answer} idx={idx} />
        ))}
      </div>
    </div>
  );
};

const FAQQuestion: React.FC<{
  question: string;
  answer: JSX.Element;
  idx: number;
}> = ({ question, answer, idx }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="accordion bg-gray-50 dark:bg-slate-900">
      <input
        type="checkbox"
        id={`accordion-${idx}`}
        className="accordion-toggle"
        checked={open}
        onChange={() => {
          setOpen(!open);
        }}
      />
      <label
        htmlFor={`accordion-${idx}`}
        className="accordion-title py-0  bg-gray-50 dark:bg-slate-900"
      >
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold my-4 text-base">{question}</h4>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </label>
      <div className="accordion-content">
        <div className="min-h-0"> {answer}</div>
      </div>
    </div>
  );
};

export default About;
