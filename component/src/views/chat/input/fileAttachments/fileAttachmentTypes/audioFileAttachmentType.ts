import {AttachmentObject, FileAttachmentsType} from '../fileAttachmentsType';
import {FileAttachments} from '../../../../../types/fileAttachments';
import {SVGIconUtils} from '../../../../../utils/svg/svgIconUtils';
import {PLAY_ICON_STRING} from '../../../../../icons/playIcon';
import {STOP_ICON_STRING} from '../../../../../icons/stopIcon';
import {Browser} from '../../../../../utils/browser/browser';

export class AudioFileAttachmentType extends FileAttachmentsType {
  private _activePlaceholderTimer?: number;
  private _activePlaceholderAttachment?: AttachmentObject;

  constructor(fileAttachments: FileAttachments, toggleContainer: (display: boolean) => void, container: HTMLElement) {
    super(fileAttachments, toggleContainer, container);
  }

  private static createAudioContainer() {
    const container = document.createElement('div');
    container.classList.add('border-bound-attachment', 'audio-attachment-icon-container');
    if (Browser.IS_SAFARI) container.classList.add('border-bound-attachment-safari');
    return container;
  }

  private static addAudioElements(container: HTMLElement, fileReaderResult: string) {
    const audio = document.createElement('audio');
    audio.src = fileReaderResult;
    const play = SVGIconUtils.createSVGElement(PLAY_ICON_STRING);
    play.classList.add('attachment-icon', 'play-icon');
    const stop = SVGIconUtils.createSVGElement(STOP_ICON_STRING);
    stop.classList.add('attachment-icon', 'stop-icon');
    container.replaceChildren(play);
    audio.onplay = () => {
      container.replaceChildren(stop);
    };
    audio.onpause = () => {
      container.replaceChildren(play);
      audio.currentTime = 0;
    };
    audio.onended = () => {
      container.replaceChildren(play);
    };
    container.onclick = () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    };
  }

  public static createAudioAttachment(fileReaderResult: string) {
    const container = AudioFileAttachmentType.createAudioContainer();
    AudioFileAttachmentType.addAudioElements(container, fileReaderResult);
    return container;
  }

  private createPlaceholderAudioAttachment() {
    const container = AudioFileAttachmentType.createAudioContainer();
    const text = document.createElement('div');
    text.classList.add('audio-placeholder-text');
    const textContainer = document.createElement('div');
    textContainer.classList.add('file-attachment-text-container', 'audio-placeholder-icon-container');
    textContainer.appendChild(text);
    text.textContent = '0:00';
    this._activePlaceholderTimer = AudioFileAttachmentType.createTimer(text);
    container.appendChild(textContainer);
    return container;
  }

  private static createTimer(text: HTMLElement) {
    let time = 0;
    return setInterval(() => {
      time += 1;
      const minutes = Math.floor(time / 60);
      const seconds = (time % 60).toString().padStart(2, '0');
      text.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }

  addPlaceholderAttachment() {
    const audioAttachment = this.createPlaceholderAudioAttachment();
    this._activePlaceholderAttachment = this.addFileAttachment(new File([], ''), 'audio', audioAttachment, false);
  }

  // prettier-ignore
  completePlaceholderAttachment(file: File, fileReaderResult: string) {
    const attachmentObj = this._activePlaceholderAttachment;
    if (!attachmentObj) return;
    attachmentObj.file = file;
    AudioFileAttachmentType.addAudioElements(
      attachmentObj.attachmentContainerElement.children[0] as HTMLElement, fileReaderResult);
    attachmentObj.removeButton = this.createRemoveAttachmentButton(attachmentObj);
    attachmentObj.attachmentContainerElement.appendChild(attachmentObj.removeButton);
    this._activePlaceholderAttachment = undefined;
    this.clearTimer();
  }

  removePlaceholderAttachment() {
    if (this._activePlaceholderAttachment) {
      this.removeFile(this._activePlaceholderAttachment);
      this._activePlaceholderAttachment = undefined;
      this.clearTimer();
    }
  }

  private clearTimer() {
    if (this._activePlaceholderTimer !== undefined) {
      clearInterval(this._activePlaceholderTimer);
      this._activePlaceholderTimer = undefined;
    }
  }

  public static stopAttachmentPlayback(attachmentContainerEl: HTMLElement) {
    if (attachmentContainerEl.children[0]?.children?.[0]?.classList.contains('stop-icon')) {
      // stops audio before removing
      (attachmentContainerEl.children[0] as HTMLElement).click();
    }
  }
}