import React, { useState } from 'react';
import './App.css';
import Tweet from '../lib';

function App() {

  const [nickname, setNickname] = useState("ThaBestUNO");
  const [name, setName] = useState("Martavis Bryant");
  const [avatar, setAvatar] = useState("https://a.thumbs.redditmedia.com/6lr4pcUCpGx1JAZkxxGZLIjntqTdouzBAgQf2ZMfuc4.jpg");
  const [verified, setVerified] = useState(true);
  const [locked, setLocked] = useState(false);
  const [display, setDisplay] = useState("default");
  const [beingReplaced, setBeingReplaced] = useState("Sammie coates");
  const [date, setDate] = useState("9:35 PM · 28 Apr 2017");
  const [retweets, setRetweets] = useState(1187);
  const [likes, setLikes] = useState(1049);

  return (
    <div className="App">
      <header className="App-header">
        <Tweet config={
          {
            user: {
              nickname: nickname,
              name: name,
              avatar: avatar,
              verified: verified,
              locked: locked
            },
            display: display, // default, dim or light-out
            beingReplaced: beingReplaced,
            date: date,
            retweets: retweets,
            likes: likes
          }
        } />
        <div>
          <form className="config">
            <fieldset>
              <legend>User</legend>
              <div>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" id="nickname" value={nickname} onChange={e => setNickname(e.target.value)} />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="avatar">Avatar</label>
                <input type="text" id="avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
              </div>
              <div>
                <label htmlFor="verified">Verified</label>
                <input type="checkbox" id="verified" checked={verified} onChange={e => {
                  const val = e.target.checked;
                  setVerified(val);
                  if (val && locked) setLocked(false);
                }} />
              </div>
              <div>
                <label htmlFor="locked">Locked</label>
                <input type="checkbox" id="locked" checked={locked} onChange={e => {
                  const val = e.target.checked;
                  setLocked(val);
                  if (val && verified) setVerified(false);
                }} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Tweet</legend>
              <div>
                <label htmlFor="display">Display</label>
                <select name="display" id="display" onChange={e => {setDisplay(e.target.value)}}>
                  <option value="default">Default</option>
                  <option value="dim">Dim</option>
                  <option value="lightsout">Lights out</option>
                </select>
              </div>
              <div>
                <label htmlFor="text">Who is being replaced?</label>
                <input type="text" id="text" value={beingReplaced} onChange={e => setBeingReplaced(e.target.value)}
                  maxLength="280"/>
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />
              </div>
              <div>
                <label htmlFor="retweets">Retweets</label>
                <input type="number" id="retweets" value={retweets} onChange={e => setRetweets(e.target.value)} />
              </div>
              <div>
                <label htmlFor="likes">Likes</label>
                <input type="number" id="likes" value={likes} onChange={e => setLikes(e.target.value)} />
              </div>
            </fieldset>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
