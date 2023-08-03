  import {Component, Input, OnInit} from '@angular/core';
  import {HttpClient} from "@angular/common/http";
  import {Observable, shareReplay} from "rxjs";

  @Component({
    selector: 'wtd-code-snippet',
    templateUrl: './code-snippet.component.html',
    styleUrls: ['./code-snippet.component.scss']
  })
  export class CodeSnippetComponent implements OnInit {

    // The folder name of the component
    @Input() source: string | undefined;
    // The files extension to display, by default all files are displayed
    @Input() files: ('html' | 'scss' | 'ts')[] = ['html', 'scss', 'ts'];

    filesContent: { [key: string]: string } = {};

    constructor(private _http: HttpClient) {
    }

    ngOnInit(): void {

      // Fetch the content of the files
      for (let file of this.files) {
        this.fetchDocument(this.getUrlForFileType(file)).subscribe((data) => {
          this.filesContent[file] = data.trim();
        })
      }

    }

    getUrlForFileType(file: string): string {
      const folder = this.source;
      const filename = this.getFilename(file)

      return `/docs-content/${folder}/${filename}`;
    }

    getFilename(file: string): string {
      // the file name is the last part of the source url + the file extension
      return `${this.source?.split('/').slice(-1)}.component.${file}`;
    }

    fetchDocument(url: string): Observable<string> {
      return this._http.get(url, {responseType: 'text'}).pipe(shareReplay(1));
    }


  }
