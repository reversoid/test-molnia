import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  public beforeUpload(
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const isCorrectFormat =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isCorrectFormat) {
        // this.msg.error('You can only upload JPG or PNG');
        console.log('format error');
        observer.complete();
        return;
      }
      const isLessThan700Kb = file.size! / 1024 < 700;
      if (!isLessThan700Kb) {
        // this.msg.error('Image must smaller than 700Kb');
        console.log('size error');
        observer.complete();
        return;
      }
      observer.next(isCorrectFormat && isLessThan700Kb);
      observer.complete();
    });
  }
  public getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
}
