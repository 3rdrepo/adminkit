package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

// TravelDir .
func TravelDir(pathname string, dst string) error {
	rd, err := ioutil.ReadDir(pathname)
	for _, fi := range rd {
		if fi.IsDir() {
			fmt.Printf("[%s]\n", pathname+"\\"+fi.Name())
			TravelDir(pathname+fi.Name()+"\\", dst)
		} else {
			fmt.Println(fi.Name(), "->", dst+fi.Name())

			data, err := ioutil.ReadFile(pathname + fi.Name())
			fmt.Println(fi.Name(), "->", dst+fi.Name(), err)
			str := string(data)
			if bPos := strings.Index(str, "<main"); bPos >= 0 {
				if ePos := strings.Index(str, "/main>"); ePos >= 0 && ePos > bPos+1 {
					str = str[bPos : ePos+6]
					ioutil.WriteFile(dst+fi.Name(), []byte(str), 0x777)
				}
			}
		}
	}
	return err
}

func genPages(rootPath string) (string, string) {
	retStr := ""
	divRetStr := ""
	var traval func(string)
	traval = func(pathname string) {
		retStr += "\n"
		rd, _ := ioutil.ReadDir(pathname)
		for _, fi := range rd {
			if fi.IsDir() {
				fmt.Printf("[%s]\n", pathname+fi.Name())
				traval(pathname + fi.Name() + "/")
			} else {
				// fmt.Println(fi.Name(), "->", fi.Name())

				retStr += fmt.Sprintf(`
				{
					dst: "%v",
					url: "%v",
					lazy: true,
				},`, fi.Name(), (pathname + fi.Name())[len(rootPath):])
				divRetStr += fmt.Sprintf(`<div id="%v"></div>%v`, (pathname + fi.Name())[len(rootPath):], "\n")
			}
		}
		retStr += "\n"
	}
	traval(rootPath)
	retStr = "[\n" + retStr + "\n]"
	divRetStr = "<div>\n" + divRetStr + "\n</div>"
	return retStr, divRetStr
}

func main() {
	// TravelDir("./src/page/", "./static/page/")

	ret, divRet := genPages("./src/page/")
	fmt.Println("--------------------------------")
	fmt.Println(ret)
	fmt.Println("--------------------------------")
	fmt.Println(divRet)
	fmt.Println("--------------------------------")
}
