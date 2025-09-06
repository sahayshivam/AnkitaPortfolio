import React from "react";

function article_linkedin() {
  return {
    date: "5 September 2025",
    title: "Think Your Network is Safe?Think Again",
    description:
      "An article exploring the hidden risks in personal and professional networks and how to safeguard them.",
    keywords: [
      "Cybersecurity",
      "Network Safety",
      "Ankita Yankanchi",
      "LinkedIn Pulse",
    ],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }

      .article-content h2 {
        font-size: 1.8rem;
        margin-bottom: 10px;
        text-align: center;
      }

      .article-content p {
        font-size: 1rem;
        line-height: 1.6;
        text-align: justify;
      }

      .article-content a {
        margin-top: 20px;
        font-weight: bold;
        color: #007acc;
        text-decoration: none;
      }

      .article-content a:hover {
        text-decoration: underline;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <h2>Think Your Network is Safe?Think Again</h2>
          <p>
            This piece takes a closer look at the alarming rise of cyberattacks, breaking down the different types in a way that’s both insightful and lighthearted. From phishing traps to ransomware scares, I highlight how these threats are evolving and why they matter more than ever. The goal? To make a serious topic easier to understand—and maybe even a little fun to read.
          </p>
          <a
            href="https://www.linkedin.com/pulse/think-your-network-safe-again-ankita-yankanchi-w4bic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full article on LinkedIn Pulse
          </a>
        </div>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_linkedin];

export default myArticles;
