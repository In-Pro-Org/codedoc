import { RendererLike } from '@connectv/html';
import { Button } from '@codedoc/core/components';


export function CopyButton(_: any, renderer: RendererLike<any, any>) {
    return <Button icon='true' onclick='smartCopy(this)' label='icon-copy' />;
}
