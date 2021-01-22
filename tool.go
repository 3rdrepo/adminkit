package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

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

func main() {
	TravelDir("./static/oldpage/", "./static/page/")
}
