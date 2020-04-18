#include <unordered_map>
#include <vector>
#include <algorithm>
#include <filesystem>
#include <iostream>

#include <stdio.h>
#include <windows.h>
#include <fileapi.h>
#include <Wincrypt.h>

using namespace std;

namespace fs = std::filesystem;

class DirNode
{
public:
    uintmax_t totalSize;
    std::unordered_map<std::string, DirNode> dirs;
};

char *readable_fs(double size /*in bytes*/, char *buf);
uintmax_t recursive(std::string path, DirNode root);
void printDirInfo(std::string path);
bool directory_exists(const char *szPath);

void main(int argc, char **argv)
{
    std::string path(argv[1]);
    if (!directory_exists(argv[1]))
    {
        std::cout << "The root directory does not exist: " << argv[2];
        return;
    }
    printDirInfo(path);
}

char *readable_fs(double size /*in bytes*/, char *buf)
{
    int i = 0;
    const char *units[] = {"B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"};
    while (size > 1024)
    {
        size /= 1024;
        i++;
    }
    sprintf(buf, "%.*f %s", i, size, units[i]);
    return buf;
}

uintmax_t recursive(std::string path, DirNode root)
{
    for (const auto &entry : fs::directory_iterator(path))
    {
        std::string path = entry.path().string();
        std::string filename = entry.path().filename().string();
        if (entry.is_directory())
        {
            DirNode child;
            root.dirs.emplace(filename, child);
            root.totalSize += recursive(path, child);
        }
        else
        {
            root.totalSize += entry.file_size();
        }
    }

    return root.totalSize;
}

void printDirInfo(std::string path)
{
    for (const auto &entry : fs::directory_iterator(path))
    {
        std::string path = entry.path().string();
        std::string filename = entry.path().filename().string();
        char buf[10];
        if (entry.is_directory())
        {
            DirNode root;
            recursive(path, root);
            std::cout << "DIR " << path << " " << readable_fs(root.totalSize, buf);
        }
        else
        {
            std::cout << "FILE " << path << " " << readable_fs(entry.file_size(), buf);
        }
    }
}

bool directory_exists(const char *szPath)
{
    DWORD dwAttrib = GetFileAttributes(szPath);

    return (dwAttrib != INVALID_FILE_ATTRIBUTES &&
            (dwAttrib & FILE_ATTRIBUTE_DIRECTORY));
}
