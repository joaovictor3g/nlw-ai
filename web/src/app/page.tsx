import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <header className="border-b">
        <div className="px-6 py-3 flex items-center justify-between max-w-[1400px] my-0 mx-auto w-full">
          <h1 className="text-xl font-bold">upload.ai</h1>

          <Button className="flex items-center rounded ">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6 grid grid-cols-[1fr,320px] gap-6 max-w-[1400px] my-0 mx-auto w-full">
        <section className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder="Inclua o prompt para IA"
              className="resize-none p-4 leading-relaxed rounded"
            />
            <Textarea
              placeholder="Resultado gerado pela IA"
              readOnly
              className="cursor-not-allowed resize-none p-4 leading-relaxed rounded focus:outline-none"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: voce pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteudo da transcrição do vídeo
            selecionado.
          </p>
        </section>

        <aside className="space-y-6">
          <form className="space-y-6 w-full">
            <label
              htmlFor="video"
              className="border flex rounded aspect-video cursor-pointer justify-center border-dashed text-sm flex-col gap-2 items-center text-muted-foreground hover:bg-primary/5"
            >
              Selecione um vídeo
              <FileVideo className="w-4 h-4" />
            </label>

            <input
              type="file"
              name="video"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>

              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none rounded"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button className="w-full flex gap-2 rounded">
              Carregar video
              <Upload className="w-4 h-4 " />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger className="rounded">
                  <SelectValue placeholder="Selecione um Prompt" />
                </SelectTrigger>

                <SelectContent className="rounded rounded">
                  <SelectItem value="youtube_title">
                    Título do Youtube
                  </SelectItem>
                  <SelectItem value="youtube_description">
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger className="rounded">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="rounded">
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full rounded flex gap-2">
              Executar
              <Wand2 className="w-4 h-4" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
