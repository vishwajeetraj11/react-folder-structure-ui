import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Folder folderData={folderData} />
    </div>
  );
}

const Folder = ({ folderData }) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <div>
      <div
        style={{
          backgroundColor: folderData.children ? 'lightgreen' : 'white',
          display: 'inline-block',
        }}
        onClick={() => setExpand((p) => !p)}
      >
        {folderData.name}
      </div>
      {expand &&
        folderData.children?.map((child, i) => (
          <div style={{ paddingLeft: `${20}px` }}>
            <Folder key={i} folderData={child} />
          </div>
        ))}
    </div>
  );
};

const folderData = {
  name: 'root',
  isFolder: true,
  children: [
    {
      name: 'public',
      isFolder: true,
      children: [
        {
          name: 'public nested 1',
          isFolder: true,
          children: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public_nested_file',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      children: [
        {
          name: 'App.js',
          isFolder: false,
        },
        {
          name: 'Index.js',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: true,
    },
  ],
};
