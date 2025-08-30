import os
import whisper
os.environ["PATH"]+=os.pathsep+r"C:\Users\Rehan\Downloads\ffmpeg-8.0-essentials_build\ffmpeg-8.0-essentials_build\bin"
model=whisper.load_model("base")
def transcribe_audio(file_path):
  result = model.transcribe(file_path)
  return result['text']
