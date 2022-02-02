## JSON

```
{
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
}
```

## Output
![image](https://user-images.githubusercontent.com/47270995/152190724-0c28866f-6d2b-4882-afb9-549e642dc270.png)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-q2jzvy)
