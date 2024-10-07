# TCR Tool

Without going too much in detail, here's a little explanation on how the TCR Utility Tool works.

The command must follow the following format, and be executed from the root directory:

> .\tcr\\**OS**\tcr.exe -b .\\**language**\ -w .\\**directory**\ -t **toolchain**


## Mob / pair programming on one computer

You can work on a single computer using TCR solo mode:
> .\tcr\\**OS**\tcr.exe solo -b .\\**language**\ -w .\\**language**\ -t **toolchain**

```shell
// For Java
./tcr/MacOs/tcr solo -b java/ -w java/ -t maven
.\tcr\Windows\tcr.exe solo -b .\java\ -w .\java\ -l java -t maven

// For C#
./tcr/MacOs/tcr solo -b csharp/ -w csharp/ -t dotnet
.\tcr\Windows\tcr.exe solo -b .\csharp\ -w .\csharp\ -t dotnet

// For typescript
./tcr/MacOs/tcr solo -b typescript -w typescript -t npm
.\tcr\Windows\tcr.exe solo -b typescript -w typescript -t npm

// For python
./tcr/MacOs/tcr solo -b python -w python -t pytest
.\tcr\Windows\tcr.exe solo -b python -w python -t pytest
```

## Mob / pair programming using remote

You can work on a single computer using TCR solo mode:
> .\tcr\\**OS**\tcr.exe -b .\\**language**\ -w .\\**directory**\ -t **toolchain**

### (SUPER) Important

Create a branch of your own so you don't push all your commits on the main branch!

### Examples

```shell
// For Java
./tcr/MacOs/tcr -b java/ -w java/ -t maven
.\tcr\Windows\tcr.exe -b .\java\ -w .\java\ -l java -t maven

// For C#
./tcr/MacOs/tcr -b csharp/ -w csharp/ -t dotnet
.\tcr\Windows\tcr.exe -b .\csharp\ -w .\csharp\ -t dotnet

// For typescript
./tcr/MacOs/tcr -b typescript -w typescript -t npm
.\tcr\Windows\tcr.exe -b typescript -w typescript -t npm
```

From there, the tool will provide a set of options:
```shell
[TCR] Available Options:
[TCR]   D -> Driver role
[TCR]   N -> Navigator role
[TCR]   P -> Turn on/off git auto-push
[TCR]   Q -> Quit
[TCR]   ? -> List available options
```

It's pretty simple:
- When it's your turn to drive, pick the **Driver role** or press **D**. You will be the driver for the next 5 minutes.
- Otherwise, pick the **Navigator role** or press **N**. You will constantly pull commits and have an up-to-date codebase.

Please, make sure to follow your rotation and have only one driver at a time.

You can find more information on the TCR Tool in [its documentation](https://github.com/murex/TCR/blob/main/doc/tcr.md) or using
the `tcr help` command.

Have fun!